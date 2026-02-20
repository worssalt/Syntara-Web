import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const items = [
    {
      quote:
        "SYNTARA lanzó nuestro MVP en 6 semanas y en 3 meses ya estábamos vendiendo online. Rápidos y sin sorpresas.",
      name: "María López",
      role: "Fundadora — Tienda Lumen",
    },
    {
      quote:
        "Gran atención al detalle: diseño que convierte y despliegue sin incidencias. Recomendables para startups.",
      name: "Carlos Méndez",
      role: "Product Manager — AppB2C",
    },
    {
      quote:
        "Soporte continuo y roadmap claro. Nuestro comercio ganó 38% más durante la primera campaña.",
      name: "Ana Ruiz",
      role: "CPO — Marketly",
    },
  ]

  return (
    <section className="py-20 bg-muted/10">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen quienes ya lanzaron</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Testimonios reales de emprendedores y PYMEs que lanzaron productos digitales con SYNTARA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.name} className="p-6 bg-card/60 border-border/40">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Quote className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-semibold">{it.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{it.quote}</p>
                <p className="mt-4 text-sm text-muted-foreground/80">{it.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
