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
  },
  {
    title: "Rentabilidad",
    description: "Desarrollamos pensando en tu objetivo. Cada línea de código debe aportar valor real a tu negocio.",
    icon: TrendingUp,
  },
  {
    title: "Transparencia",
    description: "Sin letra pequeña ni costes ocultos. Comunicación clara y honesta en cada etapa del desarrollo.",
    icon: Search,
  },
]

export function NosotrosContent() {
  return (
    <main className="relative bg-[#030712] min-h-screen overflow-hidden pb-32">
      {/* 1. Fondo Global Tech Grid + Halos */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 2. Hero Section */}
      <section className="relative z-10 pt-16 md:pt-24 pb-12 flex flex-col items-center px-4">
        {/* Halo Masivo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-syntara-cyan/10 blur-[120px] pointer-events-none -z-10 rounded-full"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          {/* Badge Futurista ELIMINADO */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center text-white tracking-tight leading-tight mb-6">
            Tu aliado para <br className="block sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-syntara-cyan to-blue-400">
              emprendedores y PYMEs
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 text-center max-w-2xl mx-auto px-4 leading-relaxed">
            Ayudamos a emprendedores y PYMEs a lanzar y escalar negocios digitales. Diseño, desarrollo y soporte pensados para aumentar ventas y reducir costes operativos.
          </p>
        </motion.div>
      </section>

      {/* 3. Sección 'Nuestro ADN' */}
      <section className="relative z-10 container mx-auto px-6 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-br from-white via-white to-syntara-cyan/50 text-transparent bg-clip-text mb-16"
        >
          Nuestro ADN
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 lg:px-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-gradient-to-b from-[#0A1220]/70 to-[#030712]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-10 group hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Top Line Glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-syntara-cyan transition-all duration-500"></div>

              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-syntara-cyan mb-6 group-hover:scale-110 group-hover:bg-syntara-cyan/10 group-hover:border-syntara-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all">
                <value.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Sección 'Ruta de Trabajo' */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-20"
        >
          Nuestra ruta de trabajo
        </motion.h3>

        <div className="relative">
          {/* Línea de Conexión */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-syntara-cyan/50 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
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
                className="bg-[#050B14]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 group hover:border-syntara-green/50 hover:shadow-[0_0_40px_rgba(57,255,20,0.15)] transition-all duration-300 relative overflow-hidden min-h-[250px] flex flex-col justify-start"
              >
                <h4 className="text-xl font-bold text-white mb-4 z-10 relative">{step.title}</h4>
                <p className="text-sm text-gray-400 z-10 relative leading-relaxed">
                  {step.text}
                </p>
                {/* Números de Cristal Masivos */}
                <span className="absolute -bottom-4 -right-4 text-9xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.05)] group-hover:[-webkit-text-stroke:2px_rgba(57,255,20,0.2)] transition-all duration-500 pointer-events-none select-none">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Incognito/Tech) */}
      <section className="relative z-10 py-12 container px-6 mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm mx-auto md:mr-auto aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl -z-10" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 grayscale hover:grayscale-0 transition-all duration-500 hover:-translate-y-3 border border-white/10">
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
            <h2 className="text-3xl md:text-5xl font-bold text-white">El motor tecnológico detrás de tu empresa</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              No somos la típica agencia. Somos un escuadrón técnico de arquitectos de software, diseñadores y estrategas que trabajan tras bambalinas.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Nuestro objetivo no es ser los protagonistas, sino darte a ti las herramientas exactas para que tu negocio domine su sector.
            </p>

            <div>
              <p className="text-sm text-gray-500 mt-6 mb-3 uppercase tracking-wider font-semibold">Nuestras Áreas de Expertise:</p>
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
                    className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-syntara-cyan hover:bg-syntara-cyan/10 hover:border-syntara-cyan/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative z-10 py-12 container px-6 mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0A1220]/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
           {/* Top Line Glow for Vision Card */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-syntara-cyan/30 to-transparent"></div>

          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="p-8 md:p-16 flex flex-col justify-center space-y-8 relative z-10 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Visión de Futuro
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Creemos en un futuro donde la tecnología no es una barrera, sino un acelerador.
                Donde la seguridad y la experiencia de usuario conviven en perfecta armonía.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Nuestro objetivo es facilitar herramientas digitales accesibles y escalables para emprendedores y pequeñas empresas,
                democratizando el acceso a soluciones de nivel empresarial.
              </p>
            </div>
            
            <div className="relative h-64 md:h-full order-1 md:order-2">
              <Image
                src="/images/sala-juntas.png"
                alt="Visión de Futuro"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0A1220] via-[#0A1220]/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-syntara-cyan/5 pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              ¿Tu negocio está listo para el <span className="text-syntara-cyan">siguiente nivel</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Deja atrás los procesos manuales y las hojas de cálculo. Desarrollemos el sistema a medida que tu equipo necesita para escalar sin límites.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-syntara-cyan text-[#030712] font-bold text-lg py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:-translate-y-1 transition-all duration-300">
                Automatizar mi operación -&gt;
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
