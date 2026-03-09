import Image from 'next/image'
import { TrendingUp, Users, RefreshCw, BarChart2, Plug, Cloud } from 'lucide-react'

export function SystemMonitor() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#071630] perspective-[2000px]">
      {/* Background Stars Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] opacity-60 pointer-events-none" />
      
      {/* Ambient Light Blurs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-syntara-cyan/10 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-syntara-green/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sistemas que Piensan por tu Negocio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Automatización inteligente que libera tiempo y potencia resultados.
          </p>
        </div>

        {/* Central Visual Dashboard - 3D Rotating Hologram */}
        <div className="relative w-full max-w-2xl lg:max-w-4xl mx-auto mb-16 mt-12 z-20 perspective-[2000px] overflow-hidden md:overflow-visible px-4 md:px-0">
          
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
          <div className="absolute left-2 bottom-0 scale-75 origin-bottom-left md:left-[-2rem] lg:left-[-4rem] md:bottom-8 md:scale-100 z-30 bg-[#030812]/70 backdrop-blur-xl rounded-xl p-5 border border-white/10 shadow-[0_0_60px_rgba(0,229,255,0.2)] animate-bounce-subtle w-64">
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
          <div className="absolute right-2 top-0 scale-75 origin-top-right md:right-[-2rem] lg:right-[-4rem] md:top-8 md:scale-100 z-30 bg-[#030812]/70 backdrop-blur-xl rounded-xl p-5 border border-white/10 shadow-[0_0_0px_rgba(57,255,20,0.2)] animate-bounce-subtle w-60">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mt-4 z-20 relative">
          {[
            {
              icon: RefreshCw,
              title: "Automatización de procesos",
              desc: "Elimina tareas repetitivas y optimiza flujos de trabajo."
            },
            {
              icon: BarChart2,
              title: "Reportes en tiempo real",
              desc: "Visualiza métricas clave y toma decisiones informadas."
            },
            {
              icon: Plug,
              title: "Integraciones API",
              desc: "Conecta todos tus sistemas en una sola plataforma unificada."
            },
            {
              icon: Cloud,
              title: "Escalabilidad cloud",
              desc: "Crece sin límites con infraestructura flexible e independiente."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl p-6 bg-[#0A1220]/70 backdrop-blur-sm border border-syntara-cyan/60 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:border-syntara-cyan hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-300 group"
            >
              {/* Spotlight Interno */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-syntara-cyan/10 blur-[60px] pointer-events-none -z-10" />
              
              <div className="w-10 h-10 rounded-lg bg-syntara-cyan/5 border border-syntara-cyan/10 flex items-center justify-center mb-4 group-hover:bg-syntara-cyan/10 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-5 h-5 text-syntara-cyan drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
              </div>
              <h3 className="text-lg font-bold text-white mt-4 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
