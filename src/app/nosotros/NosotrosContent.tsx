"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Search, TrendingUp, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
  {
    title: "Innovación",
    description: "No seguimos tendencias, implementamos soluciones probadas que te mantienen a la vanguardia tecnológica.",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Transparencia",
    description: "Sin letra pequeña ni costes ocultos. Comunicación clara y honesta en cada etapa del desarrollo.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Rentabilidad",
    description: "Desarrollamos pensando en tu ROI. Cada línea de código debe aportar valor real a tu negocio.",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
]

export function NosotrosContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
              <Handshake className="h-4 w-4" />
              Más que proveedores
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
              Tu aliado para <br />
              <span className="text-primary">emprendedores y PYMEs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              Ayudamos a emprendedores y PYMEs a lanzar y escalar negocios digitales. Diseño, desarrollo y soporte pensados para aumentar ventas y reducir costes operativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground">Los pilares que sostienen cada relación comercial.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${value.bg} flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300`}>
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold">Visión de Futuro</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos en un futuro donde la tecnología no es una barrera, sino un acelerador.
                  Donde la seguridad y la experiencia de usuario conviven en perfecta armonía.
                  Nuestro objetivo es facilitar herramientas digitales accesibles y escalables para emprendedores y pequeñas empresas.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-muted/50 rounded-full overflow-hidden border border-border/50">
                  <Image
                    src="/images/sala-juntas.png"
                    alt="Equipo SYNTARA"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Construyamos el futuro juntos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Estamos listos para ayudarte a lanzar y vender en línea.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-lg shadow-primary/20">
                Comenzar mi proyecto
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
