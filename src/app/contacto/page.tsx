import type { Metadata } from "next"
import { ContactoContent } from "./ContactoContent"

export const metadata: Metadata = {
  title: "Contacto | SYNTARA — Hablemos de tu proyecto",
  description: "Contacta con SYNTARA. Cuéntanos tu proyecto y te respondemos en menos de 24 horas. Formulario de contacto para emprendedores y PYMEs.",
  openGraph: {
    title: "Contacto | SYNTARA",
    description: "Cuéntanos tu proyecto y te respondemos en menos de 24 horas.",
    type: "website",
    siteName: "SYNTARA",
  },
}

export default function ContactoPage() {
  return <ContactoContent />
}
