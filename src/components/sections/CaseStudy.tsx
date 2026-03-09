import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CaseStudy() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-syntara-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Sistemas que <span className="text-syntara-cyan">Escalan</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Casos reales de éxito con resultados medibles.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          
          {/* Left Column: Image & Badge */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.2)] transition-shadow duration-500">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/restaurante-sistema.png" 
                  alt="Sistema de Gestión para Restaurante" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            
            {/* Floating Badge '01' */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-syntara-cyan flex items-center justify-center shadow-lg z-20 border-4 border-black">
              <span className="text-white text-xl font-bold">01</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            {/* Category Tag */}
            <div className="inline-block px-3 py-1 rounded-full border border-syntara-cyan/30 text-syntara-cyan text-xs font-medium tracking-wide mb-6 bg-syntara-cyan/5">
              SaaS a Medida • Gastronomía
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Control Total para Restaurante
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Automatizamos la atención al cliente, la gestión de mesas, el control de inventario y el registro de ventas en tiempo real desde diferentes dispositivos, eliminando errores operativos.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'PostgreSQL', 'AWS'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md border border-white/10 text-gray-400 text-xs bg-white/5">
                  {tech}
                </span>
              ))}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-10 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">+180%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">ventas online</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">-60%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">tiempo de gestión</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">15</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">sucursales integradas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">4.9★</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">satisfacción</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/casos/sistema-restaurante" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-black border border-white/10 text-white hover:bg-white/5 transition-colors group"
            >
              Ver Caso Completo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* Case 02: E-commerce */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
          
          {/* Left Column (Content) - Order 2 on mobile, Order 1 on desktop */}
          <div className="order-2 lg:order-1">
            {/* Category Tag */}
            <div className="inline-block px-3 py-1 rounded-full border border-syntara-cyan/30 text-syntara-cyan text-xs font-medium tracking-wide mb-6 bg-syntara-cyan/5">
              E-commerce • Retail
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Tienda Online Premium
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Creamos una experiencia de compra excepcional con diseño personalizado, integración de pagos múltiples y sistema de recomendaciones inteligente. La plataforma logró aumentar significativamente las conversiones y el ticket promedio de compra.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'Stripe', 'MongoDB', 'Vercel'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md border border-white/10 text-gray-400 text-xs bg-white/5">
                  {tech}
                </span>
              ))}
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-10 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">+250%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">conversiones</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">+85%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">ticket promedio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">50K</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">usuarios activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-syntara-cyan mb-1">2.1s</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">tiempo de carga</div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/casos/ecommerce-retail" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-black border border-white/10 text-white hover:bg-white/5 transition-colors group"
            >
              Ver Caso Completo
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column (Image) - Order 1 on mobile, Order 2 on desktop */}
          <div className="relative group order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.2)] transition-shadow duration-500">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="/images/dashboard.png" 
                  alt="Plataforma de E-commerce Premium" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            
            {/* Floating Badge '02' */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-syntara-cyan flex items-center justify-center shadow-lg z-20 border-4 border-black">
              <span className="text-white text-xl font-bold">02</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
