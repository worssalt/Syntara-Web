import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const items = [
    {
      quote:
        "SYNTARA lanzó nuestro MVP en 5 semanas y apenas usamos el sistema para nuestro restaurante se notó considerablemente el cambio a mejora.",
      name: "Karla Pasco Flores",
      role: "Fundadora — Mr.Frit",
      initials: "KP"
    },
  ]

  return (
    <section className="py-24 bg-[#071630] relative overflow-hidden">
      {/* Background Stars Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-60 pointer-events-none" />
      
      {/* Ambient Light Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-syntara-cyan/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lo que dicen quienes ya lanzaron
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Testimonios reales de emprendedores y PYMEs que lanzaron productos digitales con SYNTARA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {items.map((it) => (
            <div 
              key={it.name} 
              className="relative w-full bg-[#050B14]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-[0_0_50px_rgba(0,229,255,0.05)] overflow-hidden group hover:border-syntara-cyan/30 hover:shadow-[0_0_80px_rgba(0,229,255,0.1)] transition-all duration-500"
            >
              {/* Marca de Agua y Resplandor */}
              <Quote className="absolute -top-4 -left-4 w-24 h-24 lg:w-32 lg:h-32 text-white/[0.03] -rotate-12 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-syntara-cyan/10 blur-[80px] pointer-events-none rounded-full" />

              {/* Estrellas de Confianza */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-syntara-cyan fill-syntara-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                ))}
              </div>

              {/* El Mensaje */}
              <blockquote className="text-base lg:text-lg text-gray-200 font-medium italic leading-relaxed mb-6 relative z-10">
                "{it.quote}"
              </blockquote>

              {/* Bloque de Autor */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-syntara-cyan to-blue-600 p-[2px] flex-shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <div className="w-full h-full bg-[#050B14] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {it.initials}
                  </div>
                </div>

                {/* Info del Autor */}
                <div className="flex flex-col">
                  <div className="text-white font-bold text-base lg:text-lg tracking-wide">
                    {it.name}
                  </div>
                  <div className="text-syntara-green text-xs lg:text-sm font-medium uppercase tracking-wider">
                    {it.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
