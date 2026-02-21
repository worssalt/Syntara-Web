"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, ShieldCheck, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Testimonials } from '@/components/sections/Testimonials'
const benefits = [
  {
    title: "Velocidad y Posicionamiento",
    description: "Sitios ultrarrápidos que a Google le encantan. Usamos tecnología moderna para que tu web cargue al instante y retenga a tus clientes.",
    icon: Rocket,
  },
  {
    title: "Protección Avanzada",
    description: "Protegemos tu negocio. Desarrollamos con estándares estrictos para blindar tu información y la de tus usuarios contra amenazas digitales.",
    icon: ShieldCheck,
  },
  {
    title: "Diseño Atractivo y Estratégico",
    description: "Páginas atractivas y fáciles de usar. Estructuramos cada detalle para generar confianza y convertir a tus visitantes en clientes reales.",
    icon: Palette,
  },
]

export function ServiciosWebContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Productos digitales: <span className="text-primary">webs, apps y tiendas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Diseño y desarrollo orientado a resultados — desde proyectos sencillos hasta plataformas de venta y aplicaciones a medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contacto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                    Solicitar presupuesto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-muted/30 border border-border/50 shadow-2xl flex items-center justify-center group">
                <Image
                  src="/images/hero-servicios.png"
                  alt="Servicios Web Hero"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué usar Tecnología Moderna?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arquitectura moderna que acelera carga y conversiones para tiendas y negocios online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


          {/* Case study + testimonials */}
          <CaseStudy />
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Lanza tu producto digital hoy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              No dejes que una web lenta o una idea sin ejecución frenen tu crecimiento.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-lg shadow-primary/20">
                Solicitar presupuesto
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
