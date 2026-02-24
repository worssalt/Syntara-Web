import type { Metadata } from "next"
import { ContactSection } from "@/components/sections/ContactSection"

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
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="py-20 bg-background border-b border-border/50">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Hablemos de tu <span className="text-primary">Próximo Proyecto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para escuchar tus peticiones y convertirlas en soluciones tecnológicas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container px-6 mx-auto">
          <ContactSection />
        </div>
      </section>
    </div>
  )
}