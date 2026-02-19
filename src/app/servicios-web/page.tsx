import type { Metadata } from "next"
import { ServiciosWebContent } from "./ServiciosWebContent"

export const metadata: Metadata = {
  title: "Servicios | SYNTARA — Productos digitales y apps",
  description: "Desarrollo de productos digitales: sitios, tiendas y aplicaciones para emprendedores y PYMEs. Entregas rápidas y foco en resultados.",
  openGraph: {
    title: "Servicios | SYNTARA",
    description: "Desarrollo de sitios, tiendas y apps orientados a ventas y crecimiento.",
    type: "website",
    siteName: "SYNTARA",
  },
}

export default function ServiciosWebPage() {
  return <ServiciosWebContent />
}
