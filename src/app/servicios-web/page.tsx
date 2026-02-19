import type { Metadata } from "next"
import { ServiciosWebContent } from "./ServiciosWebContent"

export const metadata: Metadata = {
  title: "Servicios Web | SYNTARA — Tiendas online que convierten",
  description: "Diseño y desarrollo de tiendas online y sitios web para emprendedores y PYMEs. Velocidad, conversión y soporte accesible.",
  openGraph: {
    title: "Servicios Web | SYNTARA",
    description: "Tiendas online y sitios que convierten para emprendedores y PYMEs.",
    type: "website",
    siteName: "SYNTARA",
  },
}

export default function ServiciosWebPage() {
  return <ServiciosWebContent />
}
