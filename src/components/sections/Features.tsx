import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ShieldCheck, Zap, TrendingUp } from 'lucide-react'

const features = [
  {
    title: "Velocidad Extrema",
    description: "Optimizamos cada línea de código y recurso para asegurar tiempos de carga instantáneos y una experiencia de usuario fluida que retiene clientes.",
    icon: Zap,
    color: "text-amber-400",
    gradient: "from-amber-400/20 to-transparent"
  },
  {
    title: "Máxima Seguridad",
    description: "Implementamos los estándares más rigurosos de ciberseguridad (OWASP) para proteger tus datos críticos y la infraestructura de tu negocio.",
    icon: ShieldCheck,
    color: "text-primary", // Cyan
    gradient: "from-primary/20 to-transparent"
  },
  {
    title: "Resultados y Rentabilidad",
    description: "Diseñamos interfaces estratégicas pensadas para vender. Guiamos a tus visitantes para transformar cada clic en un cliente real y aumentar tus ingresos.",
    icon: TrendingUp,
    color: "text-accent", // Teal/Indigo
    gradient: "from-accent/20 to-transparent"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-muted/10 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Por qué elegir SYNTARA
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos ingeniería de software avanzada con visión estratégica para entregar resultados tangibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full blur-2xl`} />
              
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-4 border border-border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}