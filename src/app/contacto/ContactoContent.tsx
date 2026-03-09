"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/forms/ContactForm"

export function ContactoContent() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030712] pt-24 pb-16 md:py-32 min-h-screen">
      {/* 1. RESPLANDORES NEÓN (Cian y Verde intensos) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-syntara-cyan/20 blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-full max-w-3xl h-[500px] bg-syntara-green/15 blur-[150px] pointer-events-none z-0"></div>
      
      {/* 2. CUADRÍCULA TECH (Líneas cian visibles) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 3. CONTENIDO PRINCIPAL (Protegido en la capa frontal) */}
      <div className="relative z-10 container px-4 sm:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit mb-6 px-4 py-1.5 rounded-full border border-syntara-green/30 bg-syntara-green/10 flex items-center gap-2 text-sm text-syntara-green font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-syntara-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-syntara-green"></span>
          </span>
          Disponible para nuevos proyectos
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-4">
            Hablemos de tu <span className="text-syntara-cyan">Próximo Proyecto</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 text-center max-w-2xl mx-auto px-4 mb-10 md:mb-16">
            Estamos listos para escuchar tus peticiones y convertirlas en soluciones tecnológicas de alto impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* 2. Columna Izquierda (Tarjetas Independientes Interactivas) */}
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <motion.a
              href="mailto:hola@syntara.biz"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#0A1220]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex items-start gap-4 group hover:border-syntara-cyan/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] cursor-pointer"
            >
              <div className="bg-syntara-cyan/10 text-syntara-cyan group-hover:bg-syntara-cyan group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all p-3 rounded-xl shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                <p className="text-gray-400 text-sm md:text-base break-words group-hover:text-syntara-cyan transition-colors">hola@syntara.biz</p>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              href="tel:+51970216616"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#0A1220]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex items-start gap-4 group hover:border-syntara-cyan/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] cursor-pointer"
            >
              <div className="bg-syntara-cyan/10 text-syntara-cyan group-hover:bg-syntara-cyan group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all p-3 rounded-xl shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Teléfono</h3>
                <p className="text-gray-400 text-sm md:text-base group-hover:text-syntara-cyan transition-colors">+51 970216616</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Lunes a Sabado, 9:00 - 18:00</p>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#0A1220]/60 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex items-start gap-4 group hover:border-syntara-cyan/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)]"
            >
              <div className="bg-syntara-cyan/10 text-syntara-cyan group-hover:bg-syntara-cyan group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all p-3 rounded-xl shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Oficinas Centrales</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  La Libertad, Trujillo<br />
                  13001 Trujillo, Perú
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. Columna Derecha (Formulario Premium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0A1220]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative"
          >
            {/* Brillo en los Inputs y Botón CTA mediante selectores descendientes */}
            <div className="
              [&_input]:transition-all [&_input]:duration-300 
              [&_input]:focus:bg-syntara-cyan/5 [&_input]:focus:border-syntara-cyan/60 [&_input]:focus:ring-1 [&_input]:focus:ring-syntara-cyan/60
              [&_input]:text-sm [&_input]:md:text-base
              
              [&_textarea]:transition-all [&_textarea]:duration-300 
              [&_textarea]:focus:bg-syntara-cyan/5 [&_textarea]:focus:border-syntara-cyan/60 [&_textarea]:focus:ring-1 [&_textarea]:focus:ring-syntara-cyan/60
              [&_textarea]:text-sm [&_textarea]:md:text-base
              
              [&_button[type=submit]]:w-full [&_button[type=submit]]:py-6 [&_button[type=submit]]:rounded-xl 
              [&_button[type=submit]]:bg-gradient-to-r [&_button[type=submit]]:from-syntara-cyan [&_button[type=submit]]:to-blue-500 
              [&_button[type=submit]]:text-black [&_button[type=submit]]:font-bold [&_button[type=submit]]:text-lg 
              [&_button[type=submit]]:hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] [&_button[type=submit]]:hover:scale-[1.02] 
              [&_button[type=submit]]:transition-all [&_button[type=submit]]:duration-300
            ">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Envíanos un mensaje</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
