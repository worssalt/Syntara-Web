import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground">hola@syntara.biz</p>
                      <p className="text-muted-foreground"></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Teléfono</h3>
                      <p className="text-muted-foreground">+51 950796453</p>
                      <p className="text-sm text-muted-foreground mt-1">Lunes a Sabado, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Oficinas Centrales</h3>
                      <p className="text-muted-foreground">
                        La Libertad, Trujillo<br />
                        13001 Trujillo, Perú
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-900/10 border border-indigo-500/20">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-indigo-400 mb-2">Tiempo de Respuesta Garantizado</h3>
                    <p className="text-sm text-indigo-200/80">
                      Para consultas comerciales, nos comprometemos a responder en un plazo máximo de 24 horas laborables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}