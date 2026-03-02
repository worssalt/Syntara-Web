const DEFAULT_WINDOW_SECONDS = 60
const DEFAULT_MAX_REQUESTS = 8

function jsonResponse(status, body, origin) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  if (origin) {
    headers["Access-Control-Allow-Origin"] = origin
  }

  return new Response(JSON.stringify(body), {
    status,
    headers,
  })
}

function getAllowedOrigin(env, requestOrigin) {
  const configured = env.ALLOWED_ORIGIN || ""
  // if no origin configured, allow everything
  if (!configured) return "*"
  // when Origin header is missing (curl or server‑side dev), treat as wildcard
  if (!requestOrigin) return "*"
  return configured === requestOrigin ? configured : ""
}

function normalizeIp(request) {
  return request.headers.get("CF-Connecting-IP") || "0.0.0.0"
}

async function checkRateLimit(env, ip) {
  if (!env.RATE_LIMIT_KV) {
    return { ok: true }
  }

  const windowSeconds = Number(env.RATE_LIMIT_WINDOW_SECONDS || DEFAULT_WINDOW_SECONDS)
  const maxRequests = Number(env.RATE_LIMIT_MAX_REQUESTS || DEFAULT_MAX_REQUESTS)
  const key = `contact:${ip}`

  const raw = await env.RATE_LIMIT_KV.get(key)
  const count = raw ? Number(raw) : 0

  if (count >= maxRequests) {
    return { ok: false }
  }

  await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: windowSeconds })
  return { ok: true }
}

async function verifyTurnstile(env, token, ip) {
  if (!env.TURNSTILE_SECRET) {
    return { ok: true }
  }

  if (!token) {
    return { ok: false }
  }

  const form = new FormData()
  form.append("secret", env.TURNSTILE_SECRET)
  form.append("response", token)
  form.append("remoteip", ip)

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  })

  if (!response.ok) {
    return { ok: false }
  }

  const data = await response.json()
  return { ok: Boolean(data.success) }
}

function validatePayload(payload) {
  const requiredFields = ["name", "email", "service", "message"]

  for (const field of requiredFields) {
    if (!payload[field] || typeof payload[field] !== "string") {
      return false
    }
  }

  if (payload.message.length < 10) {
    return false
  }

  if (payload.website) {
    return false
  }

  return true
}

function buildHtml(payload) {
  return `
    <h2>Nuevo lead desde syntara.biz</h2>
    <p><strong>Nombre:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Empresa:</strong> ${payload.company || "-"}</p>
    <p><strong>Servicio:</strong> ${payload.service}</p>
    <p><strong>Presupuesto:</strong> ${payload.budget || "-"}</p>
    <p><strong>Plazo:</strong> ${payload.timeline || "-"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${payload.message}</p>
    <hr />
    <p><small>Origen: ${payload.source || "web-contact-form"}</small></p>
  `
}

async function sendWithResend(env, payload) {
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM || !env.CONTACT_TO) {
    const missing = []
    if (!env.RESEND_API_KEY) missing.push("RESEND_API_KEY")
    if (!env.CONTACT_FROM) missing.push("CONTACT_FROM")
    if (!env.CONTACT_TO) missing.push("CONTACT_TO")
    throw new Error("Missing email configuration: " + missing.join(", "))
  }

  let response
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        subject: `Nuevo contacto: ${payload.name}`,
        reply_to: payload.email,
        html: buildHtml(payload),
      }),
    })
  } catch (err) {
    console.error("Network error sending email", err)
    throw err
  }

  if (!response.ok) {
    const errorText = await response.text()
    console.error("Resend API error", response.status, errorText)
    throw new Error(errorText || "Email provider error")
  }
}

const worker = {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || ""
    const allowedOrigin = getAllowedOrigin(env, origin)

    if (request.method === "OPTIONS") {
      return jsonResponse(200, { ok: true }, allowedOrigin || "*")
    }

    if (request.method !== "POST") {
      return jsonResponse(405, { error: "Method not allowed" }, allowedOrigin)
    }

    if (!allowedOrigin) {
      return jsonResponse(403, { error: "Origin not allowed" }, "")
    }

    const ip = normalizeIp(request)
    const rateLimit = await checkRateLimit(env, ip)
    if (!rateLimit.ok) {
      return jsonResponse(429, { error: "Too many requests" }, allowedOrigin)
    }

    // debug: show env entries during development to verify values
    if (env.NODE_ENV !== "production") {
      console.log("env preview", {
        RESEND_API_KEY: !!env.RESEND_API_KEY,
        CONTACT_FROM: env.CONTACT_FROM,
        CONTACT_TO: env.CONTACT_TO,
      })
    }

    let payload
    try {
      payload = await request.json()
    } catch {
      return jsonResponse(400, { error: "Invalid JSON" }, allowedOrigin)
    }

    if (!validatePayload(payload)) {
      return jsonResponse(400, { error: "Invalid payload" }, allowedOrigin)
    }

    const turnstileToken = payload.turnstileToken || ""
    const turnstile = await verifyTurnstile(env, turnstileToken, ip)
    if (!turnstile.ok) {
      return jsonResponse(400, { error: "Bot verification failed" }, allowedOrigin)
    }

    try {
      await sendWithResend(env, payload)
      return jsonResponse(200, { ok: true }, allowedOrigin)
    } catch (err) {
      console.error("Mail send failed", err)
      // in dev we could include message in body for easier debugging, but
      // in prod we keep generic
      const body = { error: "Email delivery failed" }
      if (env.NODE_ENV !== "production" && err instanceof Error) {
        body.details = err.message
      }
      return jsonResponse(502, body, allowedOrigin)
    }
  },
}

export default worker
