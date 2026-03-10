import type { Metadata } from "next"
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'

export const metadata: Metadata = {
  title: "SYNTARA | Desarrollo Web, E-commerce y Sistemas a Medida",
  description: "Agencia digital para emprendedores y PYMEs: páginas web, e-commerce y sistemas personalizados que venden. Resultados medibles, soporte accesible.",
  alternates: {
    canonical: "https://syntara.biz",
  },
  openGraph: {
    title: "SYNTARA | Desarrollo Web, E-commerce y Sistemas a Medida",
    description: "Agencia digital para emprendedores y PYMEs: páginas web, e-commerce y sistemas personalizados que venden.",
    url: "https://syntara.biz",
    siteName: "SYNTARA",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTARA | Desarrollo Web, E-commerce y Sistemas a Medida",
    description: "Agencia digital para emprendedores y PYMEs: páginas web, e-commerce y sistemas personalizados que venden.",
  },
}

import { CaseStudy } from '@/components/sections/CaseStudy'
import { SystemMonitor } from '@/components/sections/SystemMonitor'
import { Testimonials } from '@/components/sections/Testimonials'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <CaseStudy />
      <SystemMonitor />
      <Testimonials />
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a1b38] to-[#030712] overflow-hidden">
        {/* Detailed Tech Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating Nodes & Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-syntara-cyan rounded-full animate-pulse blur-[1px]"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-syntara-green rounded-full animate-pulse delay-700 blur-[1px]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-syntara-cyan rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Ambient Light Blurs */}
        <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-syntara-cyan/10 rounded-full blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-syntara-green/10 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Escríbenos y te responderemos en menos de 24 horas.
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  )
}
