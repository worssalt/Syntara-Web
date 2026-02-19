import Image from "next/image"
import Link from "next/link"

export function CaseStudy() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Caso: Lanzamiento de marketplace — +42% en conversiones</h3>
            <p className="text-muted-foreground mb-4">
              Implementamos una tienda marketplace para un cliente retail: MVP en 8 semanas, integración de pasarela y migración desde monolito.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
              <li><strong>Cliente:</strong> RetailCo</li>
              <li><strong>Tecnologías:</strong> Next.js · Stripe · Headless CMS</li>
              <li><strong>Resultado:</strong> +42% conversión</li>
              <li><strong>Tiempo:</strong> 8 semanas (MVP)</li>
            </ul>
            <Link href="/contacto" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-lg hover:opacity-90">Ver caso / Solicitar proyecto</Link>
          </div>
          <div className="relative w-full h-64 rounded-xl overflow-hidden border border-border/50 bg-muted/30">
            <Image src="/images/dashboard.png" alt="Case study screenshot" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
