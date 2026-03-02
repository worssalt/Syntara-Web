# Cloudflare Contact Worker

Endpoint seguro para el formulario de contacto de SYNTARA.

## Qué resuelve

- Oculta secretos de correo (no van al cliente)
- Rate limit por IP
- Validación de payload y honeypot
- Verificación opcional con Cloudflare Turnstile
- CORS restringido a tu dominio

## Requisitos

- Dominio en Cloudflare (`syntara.biz`)
- Un subdominio para API (ej: `api.syntara.biz`)
- Cuenta en Resend (o adaptar a otro proveedor)

## Configuración

1. Copia `wrangler.toml.example` como `wrangler.toml`.
2. Ajusta:
   - `ALLOWED_ORIGIN=https://syntara.biz`  # en desarrollo puedes dejarlo vacío o poner `*`
   - `CONTACT_FROM=Web SYNTARA <noreply@syntara.biz>`
   - `CONTACT_TO=hola@syntara.biz`
3. Configura secretos:

```bash
wrangler secret put RESEND_API_KEY  # clave de Resend (obligatoria para que el correo salga)
wrangler secret put TURNSTILE_SECRET  # opcional
```

Si no ves la petición llegar o recibes `Email delivery failed`, revisa que el secreto se haya guardado correctamente y que 
`wrangler dev` esté leyendo el mismo. Puedes reiniciar el servidor para forzar la recarga de variables.

`TURNSTILE_SECRET` es opcional (si no lo defines, no exige token).

4. (Opcional recomendado) configura KV para rate limit:

```bash
wrangler kv namespace create RATE_LIMIT_KV
```

Agrega el binding en `wrangler.toml`.

## Deploy

```bash
cd cloudflare/contact-worker
pnpm install
pnpm deploy
```

Crea una route o subdominio para que el endpoint quede como:

`https://api.syntara.biz/contact`

> **Consejo de desarrollo:** si pruebas con `curl` o desde `localhost`, o bien añade manualmente la cabecera `Origin: https://syntara.biz`,
> o deja `ALLOWED_ORIGIN` vacío (`wrangler dev` te dará `*`).

## Integración con el frontend

En el proyecto Next.js define:

```dotenv
NEXT_PUBLIC_CONTACT_ENDPOINT=https://api.syntara.biz/contact
```

El formulario de [src/components/forms/ContactForm.tsx](../../src/components/forms/ContactForm.tsx) ya usa este endpoint como vía principal y mantiene Web3Forms como fallback.
