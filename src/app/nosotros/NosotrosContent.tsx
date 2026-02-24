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
    description: "Desarrollamos pensando en tu objetivo. Cada línea de código debe aportar valor real a tu negocio.",
    icon: TrendingUp,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
]

export function NosotrosContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20" />
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Ayudamos a emprendedores y PYMEs a lanzar y escalar negocios digitales. Diseño, desarrollo y soporte pensados para aumentar ventas y reducir costes operativos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ADN Section (Values + Methodology) */}
      <section className="py-12 bg-slate-950/50">
        <div className="container px-6 mx-auto">
          <div className="bg-slate-900/40 rounded-3xl p-8 md:p-12 border border-white/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro ADN: Filosofía y Ejecución</h2>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`${index === 1 ? "md:col-span-2 md:order-last" : ""}`}
                >
                  <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300">
                    <CardHeader className="flex flex-col items-center justify-center pt-8">
                      <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300`}>
                        <value.icon className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center pb-8 px-8">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Methodology Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-semibold">Nuestra ruta de trabajo:</h3>
            </motion.div>

            {/* Methodology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Descubrimiento", text: "Analizamos cómo trabaja tu negocio hoy para identificar exactamente en qué tareas repetitivas estás perdiendo ingresos." },
                { title: "Arquitectura", text: "Diseñamos la estructura del software pensando en la escalabilidad y seguridad de tus datos." },
                { title: "Desarrollo", text: "Escribimos código limpio y eficiente, manteniéndote informado en cada avance del proyecto." },
                { title: "Evolución", text: "Implementamos el sistema y te damos soporte continuo para que nunca te detengas." }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-slate-800/30 border-white/5 hover:border-primary/20 transition-colors">
                    <CardHeader>
                      <div className="text-4xl font-bold text-primary/20 mb-2">0{index + 1}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Incognito/Tech) */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm mx-auto md:mr-auto aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl -z-10" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 grayscale hover:grayscale-0 transition-all duration-500 hover:-translate-y-3">
                <Image
                  src="/images/servidores.png"
                  alt="El motor tecnológico"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-medium text-lg">Infraestructura Robusta</p>
                  <p className="text-white/70 text-sm">Seguridad y Escalabilidad</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">El motor tecnológico detrás de tu empresa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No somos la típica agencia. Somos un escuadrón técnico de arquitectos de software, diseñadores y estrategas que trabajan tras bambalinas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro objetivo no es ser los protagonistas, sino darte a ti las herramientas exactas para que tu negocio domine su sector.
              </p>

              <div>
                <p className="text-sm text-gray-400 mt-6 mb-3">Nuestras Áreas de Expertise:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Sistemas a Medida", 
                    "Automatización de Procesos", 
                    "Integraciones API", 
                    "Arquitectura Escalable", 
                    "Dashboards Inteligentes"
                  ].map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section (Redesigned) */}
      <section className="py-12 bg-muted/20">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 min-h-[500px]">
              <div className="p-8 md:p-16 flex flex-col justify-center space-y-8 relative z-10 order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  Visión de Futuro
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos en un futuro donde la tecnología no es una barrera, sino un acelerador.
                  Donde la seguridad y la experiencia de usuario conviven en perfecta armonía.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro objetivo es facilitar herramientas digitales accesibles y escalables para emprendedores y pequeñas empresas,
                  democratizando el acceso a soluciones de nivel empresarial.
                </p>
              </div>
              
              <div className="relative h-64 md:h-full order-1 md:order-2">
                <Image
                  src="/images/sala-juntas.png"
                  alt="Visión de Futuro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Tu negocio está listo para el siguiente nivel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Deja atrás los procesos manuales y las hojas de cálculo. Desarrollemos el sistema a medida que tu equipo necesita para escalar sin límites.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-lg shadow-primary/20">
                Automatizar mi operación -&gt;
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
