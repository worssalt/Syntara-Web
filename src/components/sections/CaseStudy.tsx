import Image from "next/image"
import Link from "next/link"

export function CaseStudy() {
  return (
    <section className="py-20 bg-background/50">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Caso de Éxito: Sistema Integral para Restaurante — Control Total</h3>
            <p className="text-muted-foreground mb-4">
              Desarrollamos un sistema a medida para optimizar las operaciones diarias. Incluye un panel de control profesional, gestión de inventario en tiempo real, alertas de stock, registro de ventas y módulo automatizado de pedidos.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-6">
              <li><strong>Cliente:</strong> Sector Gastronómico</li>
              <li><strong>Tecnologías:</strong> Plataforma a medida · Panel Autoadministrable</li>
              <li><strong>Resultado:</strong> Procesos automatizados y satisfacción total</li>
              <li><strong>Tiempo:</strong> Implementación ágil</li>
            </ul>
            <Link href="/contacto" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-lg hover:opacity-90">Ver caso / Solicitar proyecto</Link>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted/30">
            <Image src="/images/dashboard.png" alt="Case study screenshot" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
