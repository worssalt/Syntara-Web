import { ShieldCheck, Zap, TrendingUp } from 'lucide-react'

const features = [
  {
    title: "Velocidad",
    description: "Optimizamos cada línea de código y recurso para asegurar tiempos de carga instantáneos.",
    icon: Zap,
    statValue: "3.2s",
    statLabel: "tiempo de carga promedio",
    color: "cyan"
  },
  {
    title: "Seguridad",
    description: "Estándares rigurosos de ciberseguridad (OWASP) para proteger tus datos críticos.",
    icon: ShieldCheck,
    statValue: "99.9%",
    statLabel: "uptime garantizado",
    color: "green"
  },
  {
    title: "Resultados",
    description: "Interfaces estratégicas pensadas para transformar cada clic en un cliente real.",
    icon: TrendingUp,
    statValue: "+340%",
    statLabel: "crecimiento promedio",
    color: "cyan"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-[#051024] to-[#071630] relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Por Qué Elegir <span className="text-syntara-cyan">SYNTARA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Resultados medibles respaldados por tecnología de vanguardia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative h-full bg-neutral-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/5 overflow-hidden group hover:bg-neutral-900/80 transition-colors duration-500"
            >
              {/* Gradient Path Flow Border */}
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${feature.color === 'green' ? 'from-syntara-green/80 to-syntara-cyan/80' : 'from-syntara-cyan/80 to-syntara-green/80'} shadow-[0_0_15px_rgba(0,229,255,0.5)]`} />
              <div className={`absolute bottom-0 left-0 w-2/3 h-1.5 bg-gradient-to-r ${feature.color === 'green' ? 'from-syntara-cyan/80 to-transparent' : 'from-syntara-green/80 to-transparent'} shadow-[0_0_15px_rgba(0,229,255,0.5)]`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.color === 'green' ? 'bg-syntara-green/10 text-syntara-green' : 'bg-syntara-cyan/10 text-syntara-cyan'} flex items-center justify-center mb-8 relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5`}>
                <feature.icon className="w-7 h-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-12 min-h-[4rem]">
                  {feature.description}
                </p>

                {/* Statistic */}
                <div className="flex flex-col items-start mt-auto">
                  <div className={`text-5xl font-bold ${feature.color === 'green' ? 'text-syntara-green' : 'text-syntara-cyan'} mb-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                    {feature.statValue}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-medium pl-1">
                    {feature.statLabel}
                  </div>
                </div>
              </div>

              {/* Subtle inner glow */}
              <div className={`absolute -bottom-20 -left-20 w-64 h-64 ${feature.color === 'green' ? 'bg-syntara-green/5' : 'bg-syntara-cyan/5'} rounded-full blur-3xl pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
