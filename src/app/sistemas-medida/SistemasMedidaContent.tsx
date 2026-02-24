"use client"

import { Button } from "@/components/ui/button"
import { Zap, ShieldCheck, ArrowRight, Receipt, MessageCircle, CreditCard, Cloud } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SystemMonitor } from "@/components/sections/SystemMonitor"

export function SistemasMedidaContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              Soluciones a medida para PYMEs
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Tu negocio 100% bajo   <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                control y en tiempo real
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Simplificamos tu gestión diaria con sistemas personalizados. Automatiza procesos, reduce errores humanos y toma decisiones rápidas basadas en datos reales.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-12 shadow-lg shadow-primary/20">
                Pedir presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Secure & Scalable Architecture Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Text & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Infraestructura de Nivel Corporativo para tu PYME
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Construimos sobre cimientos sólidos. Tu sistema no se caerá, no será lento y estará blindado contra ataques.
                </p>
              </div>

              <div className="grid gap-6">
                {/* Box 1: Performance */}
                <div className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background/80 transition-colors">
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Rendimiento Extremo</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Arquitectura optimizada para que tus reportes tarden milisegundos en cargar, sin importar si tienes cien o miles de registros.
                    </p>
                  </div>
                </div>

                {/* Box 2: Security */}
                <div className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50 hover:bg-background/80 transition-colors">
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">Seguridad Inquebrantable</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Cifrado de datos, copias de seguridad automáticas y control de accesos. Tú decides exactamente quién ve qué en tu empresa.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Interactive System Monitor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <SystemMonitor />
            </motion.div>
          </div>

          {/* Integrations Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 pt-10 border-t border-border/40"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <p className="text-lg font-medium text-muted-foreground px-4 text-center md:text-left md:px-0">
                Conectamos tu sistema con las herramientas que ya usas
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    label: "Facturación Electrónica",
                    icon: Receipt,
                    tooltip: "Emite comprobantes legales válidos ante SUNAT/Hacienda directamente desde tu sistema y sin doble trabajo."
                  },
                  {
                    label: "WhatsApp API",
                    icon: MessageCircle,
                    tooltip: "Envía notificaciones automáticas, confirmaciones de pedido y recordatorios a tus clientes directo a su celular."
                  },
                  {
                    label: "Pasarelas de Pago",
                    icon: CreditCard,
                    tooltip: "Cobra con tarjeta de crédito/débito de forma segura dentro de tu propia plataforma, sin redirigir a sitios externos."
                  },
                  {
                    label: "Google Workspace",
                    icon: Cloud,
                    tooltip: "Sincroniza calendarios, correos, contactos y archivos de tu empresa directamente con tu nuevo software."
                  }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center max-w-[160px] md:max-w-none">
                    <div 
                      className="group relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-slate-800/40 hover:-translate-y-1 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                    >
                      <item.icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                      
                      {/* Desktop Tooltip */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 p-3 bg-white rounded-md shadow-xl z-50 hidden md:group-hover:block">
                        {/* Arrow */}
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                        <p className="text-xs text-slate-800 leading-relaxed text-left relative z-10">
                          {item.tooltip}
                        </p>
                      </div>
                    </div>
                    {/* Mobile Tooltip */}
                    <p className="block md:hidden mt-2 text-xs text-muted-foreground text-center leading-tight px-1">
                      {item.tooltip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Necesitas una solución a medida para tu negocio?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Analizamos tus procesos y diseñamos la herramienta exacta que necesitas.
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
