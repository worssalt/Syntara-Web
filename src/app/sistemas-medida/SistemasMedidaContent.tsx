"use client"

import { Button } from "@/components/ui/button"
import { Zap, ShieldCheck, ArrowRight, Receipt, MessageCircle, CreditCard, Cloud, TrendingUp, Users, RefreshCw, BarChart2, Plug } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

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
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Tu negocio 100% bajo   <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                control y en tiempo real
              </span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
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
      <section className="relative w-full overflow-hidden py-24 bg-[#030712]">
        {/* Ambient Lights */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-syntara-cyan/10 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-syntara-green/10 blur-[180px] rounded-full pointer-events-none -z-10" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

        <div className="container px-6 lg:px-8 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            
            {/* Left Column: The Subtle Glow Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl p-6 md:p-8 lg:p-10 bg-[#0A1220]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)] transition-all duration-300 group overflow-hidden flex flex-col gap-8"
            >
              {/* Internal Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-syntara-cyan/15 blur-[60px] pointer-events-none -z-10" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-syntara-cyan/10 border border-syntara-cyan/30 text-syntara-cyan mb-2">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Infraestructura de Nivel Corporativo
                </h2>
                <p className="text-white text-lg leading-relaxed">
                  Tu sistema blindado contra ataques, con rendimiento extremo y seguridad inquebrantable. Construimos sobre cimientos sólidos.
                </p>
              </div>

              <div className="grid gap-6 relative z-10">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                   <div className="mt-1 min-w-fit">
                     <Zap className="w-5 h-5 text-syntara-cyan drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]" />
                   </div>
                   <div>
                     <h3 className="font-bold text-white text-lg">Rendimiento Extremo</h3>
                     <p className="text-sm text-white">Cargas en milisegundos, sin importar el volumen de datos.</p>
                   </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                   <div className="mt-1 min-w-fit">
                     <ShieldCheck className="w-5 h-5 text-syntara-cyan drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]" />
                   </div>
                   <div>
                     <h3 className="font-bold text-white text-lg">Seguridad Total</h3>
                     <p className="text-sm text-white">Cifrado avanzado y control de accesos granular.</p>
                   </div>
                </div>
              </div>

              <div className="relative z-10 pt-4">
                <Link href="/contacto">
                  <button className="px-8 py-3 rounded-full border border-syntara-cyan/60 bg-syntara-cyan/5 text-syntara-cyan hover:bg-syntara-cyan hover:text-black hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.7)] transition-all duration-300 flex items-center gap-2 text-lg font-medium">
                    Iniciar mi transformación
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Interactive System Monitor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full relative z-10"
            >
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Caja escaladora */}
                 <div className="w-full max-w-lg lg:max-w-full xl:max-w-full transform scale-90 sm:scale-100 lg:scale-90 xl:scale-95 origin-center lg:origin-right transition-all">
                  
                  {/* Central Visual Dashboard - 3D Rotating Hologram */}
                  <div className="relative w-full max-w-2xl lg:max-w-4xl mx-auto z-20 perspective-[2000px] overflow-hidden md:overflow-visible px-4 md:px-0">
                    
                    {/* Rotated Image Container */}
                    <div className="transform-style-3d transition-transform duration-500" style={{ transform: 'perspective(1200px) rotateY(-15deg)' }}>
                      {/* Top Light Source (Neon Focus) */}
                      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(0,229,255,0.4)_0%,transparent_70%)] blur-[40px] pointer-events-none -z-10" />

                      {/* Main Glow Effect */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-syntara-cyan/25 blur-[160px] -z-10 pointer-events-none" />

                      {/* Main Image */}
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_90px_rgba(0,229,255,0.15)]">
                        <Image 
                          src="/images/estadis.jpg" 
                          alt="Dashboard inteligente SYNTARA" 
                          width={1200} 
                          height={800}
                          className="w-full h-auto object-cover opacity-95"
                        />
                      </div>
                    </div>

                    {/* Floating Card Left: Active Users */}
                    <div className="hidden sm:block absolute left-2 bottom-0 scale-75 origin-bottom-left md:left-[-2rem] lg:left-[-4rem] md:bottom-8 md:scale-100 z-30 bg-[#030812]/70 backdrop-blur-xl rounded-xl p-5 border border-white/10 shadow-[0_0_60px_rgba(0,229,255,0.2)] animate-bounce-subtle w-64">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-gray-400 font-medium">Usuarios Activos</span>
                        <Users className="w-5 h-5 text-syntara-cyan" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-3">1,284</div>
                      {/* Simulated Bar Chart */}
                      <div className="flex items-end gap-1.5 h-8">
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-3" />
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-5" />
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-4" />
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-7 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-5" />
                        <div className="flex-1 bg-syntara-cyan rounded-t-sm h-6" />
                      </div>
                    </div>

                    {/* Floating Card Right: Sales Today */}
                    <div className="hidden sm:block absolute right-2 top-0 scale-75 origin-top-right md:right-[-2rem] lg:right-[-4rem] md:top-8 md:scale-100 z-30 bg-[#030812]/70 backdrop-blur-xl rounded-xl p-5 border border-white/10 shadow-[0_0_0px_rgba(57,255,20,0.2)] animate-bounce-subtle w-60">
                      <div className="text-sm text-gray-400 font-medium mb-1">Ventas Hoy</div>
                      <div className="text-3xl font-bold text-white mb-3">$24,580</div>
                      <div className="flex items-center gap-1 bg-[#39FF14]/10 text-[#39FF14] text-xs font-bold px-2 py-1 rounded-md w-fit">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+18% vs ayer</span>
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines (Rays of Light) */}
                  <div className="hidden lg:flex justify-between max-w-3xl mx-auto h-20 relative -mt-4 z-10 px-12 opacity-60">
                     {/* 4 vertical lines connecting to the 4 cards below */}
                     <div className="w-[1px] h-full bg-gradient-to-b from-syntara-cyan/80 via-syntara-cyan/20 to-transparent" />
                     <div className="w-[1px] h-full bg-gradient-to-b from-syntara-cyan/80 via-syntara-cyan/20 to-transparent" />
                     <div className="w-[1px] h-full bg-gradient-to-b from-syntara-cyan/80 via-syntara-cyan/20 to-transparent" />
                     <div className="w-[1px] h-full bg-gradient-to-b from-syntara-cyan/80 via-syntara-cyan/20 to-transparent" />
                  </div>

                  {/* Bottom Features Grid */}
                  <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-2xl mx-auto mt-8 z-20 relative">
                    {[
                      {
                        icon: RefreshCw,
                        title: "Automatización",
                        desc: "Optimiza flujos"
                      },
                      {
                        icon: BarChart2,
                        title: "Reportes",
                        desc: "Métricas clave"
                      },
                      {
                        icon: Plug,
                        title: "Integraciones",
                        desc: "Plataforma unificada"
                      },
                      {
                        icon: Cloud,
                        title: "Cloud",
                        desc: "Escalabilidad total"
                      }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="relative overflow-hidden rounded-xl p-4 bg-[#0A1220]/70 backdrop-blur-sm border border-syntara-cyan/60 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-syntara-cyan hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-300 group"
                      >
                        {/* Spotlight Interno */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-syntara-cyan/10 blur-[60px] pointer-events-none -z-10" />
                        
                        <div className="w-8 h-8 rounded-lg bg-syntara-cyan/5 border border-syntara-cyan/10 flex items-center justify-center mb-3 group-hover:bg-syntara-cyan/10 group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-4 h-4 text-syntara-cyan drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
                        </div>
                        <h3 className="text-base font-bold text-white mt-2 mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
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
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
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
