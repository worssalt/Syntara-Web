import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Rocket } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-[#030712]">
      {/* Luces de Fondo */}
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-syntara-cyan/20 blur-[120px] md:blur-[180px] pointer-events-none z-0 rounded-full transition-all duration-700"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-syntara-green/15 blur-[120px] md:blur-[160px] pointer-events-none z-0 rounded-full transition-all duration-700"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 md:py-20 relative z-10">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 max-w-xl">
            <div className="mx-auto lg:mx-0 w-fit px-4 py-1.5 rounded-full border border-syntara-cyan/30 bg-syntara-cyan/5 text-xs md:text-sm text-syntara-cyan font-semibold tracking-wide backdrop-blur-sm">
              INFRAESTRUCTURA CORPORATIVA
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] text-white">
              SEGURIDAD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-syntara-cyan to-white">INQUEBRANTABLE</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-400/80 max-w-md">
              Especialistas en desarrollo de páginas web, e-commerce y sistemas a medida. Optimizamos tu presencia digital con soluciones rentables y resultados medibles.
            </p>

            <div className="flex flex-row gap-2 w-full sm:w-auto">
              <Link href="/contacto" className="flex-1 sm:flex-none">
                <Button className="w-full px-3 py-2 bg-syntara-cyan hover:bg-syntara-cyan/90 text-[#030712] font-bold text-xs sm:text-sm rounded-lg shadow-lg transition-all h-auto">
                  Iniciar transformación
                </Button>
              </Link>
              <Link href="/servicios-web" className="flex-1 sm:flex-none">
                <Button variant="ghost" className="w-full px-3 py-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm rounded-lg backdrop-blur-md transition-all h-auto">
                  Ver servicios
                </Button>
              </Link>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 pt-0 justify-center lg:justify-start border-t border-white/10 w-full lg:w-auto mt-0">
              <div className="mt-4">
                <p className="text-xl md:text-2xl font-bold text-syntara-cyan/90 mb-1">+11</p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider mt-1">PROYECTOS</p>
              </div>
              <div className="mt-4">
                <p className="text-xl md:text-2xl font-bold text-syntara-cyan/90 mb-1">98%</p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider mt-1">SATISFACCIÓN</p>
              </div>
              <div className="mt-4">
                <p className="text-xl md:text-2xl font-bold text-syntara-cyan/90 mb-1">2 años</p>
                <p className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-wider mt-1">EXPERIENCIA</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full flex justify-center lg:justify-end">
            {/* Main Image Container */}
            <div className="relative rounded-2xl border border-white/10 shadow-2xl bg-[#0A1220]/50 backdrop-blur-md overflow-hidden group w-full max-w-lg">
              <div className="absolute inset-0 bg-syntara-cyan/5 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Image 
                src="/images/dashboard.png" 
                alt="Dashboard tecnológico" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#030712]/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Elements */}
            {/* Top Right */}
            <div className="hidden sm:block absolute -top-6 -right-4 lg:-right-8 bg-[#0A1220]/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl animate-bounce duration-[3000ms]">
              <BarChart3 className="w-8 h-8 text-syntara-green/80" />
            </div>

            {/* Bottom Left */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 lg:-left-8 bg-[#0A1220]/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl animate-bounce duration-[4000ms] delay-700">
              <Rocket className="w-8 h-8 text-syntara-cyan/80" />
            </div>
          </div>

      </div>
    </section>
  )
}
