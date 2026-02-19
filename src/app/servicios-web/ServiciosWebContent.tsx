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
    title: "Rendimiento SEO",
    description: "Sitios ultrarrápidos que Google ama. Arquitectura Jamstack para tiempos de carga instantáneos y mejor posicionamiento.",
    icon: Rocket,
  },
  {
    title: "Seguridad Inhackeable",
    description: "Olvídate de vulnerabilidades. Al no depender de bases de datos expuestas en el frontend, tu sitio es una fortaleza.",
    icon: ShieldCheck,
  },
  {
    title: "Diseño UI/UX Premium",
    description: "Diseño pensado para convertir: plantillas optimizadas para ventas y confianza del cliente.",
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
                Diseño y desarrollo orientado a resultados — desde MVPs hasta plataformas de venta y aplicaciones a medida.
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Por qué elegir Jamstack?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Arquitectura moderna que acelera carga y conversiones para tiendas y negocios online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

          {/* Packages Section */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Paquetes rápidos para empezar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Landing + setup básico · Ideal para validar idea</p>
                  <div className="text-lg font-semibold">Desde €1.500</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardHeader>
                  <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Tienda / Webapp completa · Integraciones y SEO</p>
                  <div className="text-lg font-semibold">Desde €4.500</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center">
                <CardHeader>
                  <CardTitle>Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Producto a medida · Soporte y roadmap continuo</p>
                  <div className="text-lg font-semibold">Presupuesto a medida</div>
                </CardContent>
              </Card>
            </div>
          </section>

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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
