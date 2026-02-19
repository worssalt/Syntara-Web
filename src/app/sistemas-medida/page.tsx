import type { Metadata } from "next"
import { SistemasMedidaContent } from "./SistemasMedidaContent"

export const metadata: Metadata = {
  title: "Sistemas a Medida | SYNTARA — Soluciones para PYMEs",
  description: "Sistemas personalizados, automatización de procesos y gestión eficiente para PYMEs y startups. Diseñados a medida para tu negocio.",
  openGraph: {
    title: "Sistemas a Medida | SYNTARA",
    description: "Sistemas a medida para PYMEs y startups. Centraliza y automatiza tu negocio.",
    type: "website",
    siteName: "SYNTARA",
  },
}

export default function SistemasMedidaPage() {
  return <SistemasMedidaContent />
}
