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
    <div className="flex flex-col min-h-screen bg-[#030712] overflow-hidden relative">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff05_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent_0%,white_20%,white_80%,transparent_100%)] pointer-events-none -z-20"></div>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-20 z-10">
        <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-syntara-cyan/15 blur-[160px] pointer-events-none -z-10 rounded-full"></div>
        <div className="container px-6 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                <span className="text-white font-bold">Productos digitales:</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-syntara-cyan to-blue-400 font-extrabold">webs, apps y tiendas</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Diseño y desarrollo orientado a resultados — desde proyectos sencillos hasta plataformas de venta y aplicaciones a medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contacto">
                  <Button size="lg" className="px-8 py-4 rounded-xl font-bold bg-syntara-cyan text-[#030712] shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-1 transition-all duration-300">
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
      <section className="relative z-10 bg-gradient-to-b from-transparent to-[#030712]/50 py-16 md:py-24">
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
                <div className="relative bg-[#0A1220]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-10 group hover:-translate-y-3 transition-all duration-500 overflow-hidden h-full">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-syntara-cyan mb-6 group-hover:bg-syntara-cyan/10 group-hover:border-syntara-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all group-hover:scale-110">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground">
                      {benefit.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study + testimonials */}
      <CaseStudy />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
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
