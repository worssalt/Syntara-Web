import { useState, useEffect } from "react"

const STORAGE_KEY = "currencySymbol"

function deriveFromNavigator(): string {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  // si el idioma contiene "pe" entendemos que es Perú
  if (lang.toLowerCase().includes("pe")) {
    return "S/"
  }
  return "$"
}

export function useCurrency(): { symbol: string; ready: boolean } {
  const [symbol, setSymbol] = useState<string>("")
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // si ya hay valor en localStorage, úsalo inmediatamente
    const cached = typeof localStorage !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    if (cached) {
      setSymbol(cached)
      setReady(true)
      return
    }

    async function detect() {
      try {
        const res = await fetch("https://ipapi.co/json/")
        if (res.ok) {
          const data: { country_code?: string } = await res.json()
          if (data.country_code === "PE") {
            setSymbol("S/")
            localStorage.setItem(STORAGE_KEY, "S/")
          } else {
            setSymbol("$")
            localStorage.setItem(STORAGE_KEY, "$")
          }
        } else {
          const fallback = deriveFromNavigator()
          setSymbol(fallback)
          if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, fallback)
        }
      } catch {
        const fallback = deriveFromNavigator()
        setSymbol(fallback)
        if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, fallback)
      } finally {
        setReady(true)
      }
    }

    detect()
  }, [])

  return { symbol, ready }
}
