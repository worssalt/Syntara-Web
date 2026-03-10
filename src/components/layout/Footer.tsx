import Link from 'next/link'
import { Logo } from '@/components/layout/Logo'
import { Linkedin, Instagram, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#030712] pt-24 pb-8 overflow-hidden border-t border-white/5">
      
      {/* 1. Marca de Agua Gigante */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[18vw] font-black tracking-tighter text-white">SYNTARA</span>
      </div>

      {/* 2. Cuadrícula Principal (4 Columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* 3. Columna 1: Branding */}
        <div className="flex flex-col items-start">
          <Logo />
          <p className="mt-6 text-sm text-gray-400 leading-relaxed max-w-xs">
            Tecnología que impulsa resultados. Transformamos ideas en soluciones digitales escalables y rentables.
          </p>
        </div>

        {/* 4. Columna 2: Servicios */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Servicios</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-400">
            {['Desarrollo Web', 'E-commerce', 'Sistemas a Medida', 'Consultoría', 'Soporte'].map((item) => (
              <li key={item} className="hover:text-syntara-cyan transition-colors cursor-pointer w-fit">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Columna 3: Síguenos */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Síguenos</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="https://linkedin.com/company/syntarabiz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-syntara-cyan transition-colors w-fit">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/syntara.biz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-syntara-cyan transition-colors w-fit">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/51970216616?text=Hola%20Syntara%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-syntara-cyan transition-colors w-fit">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 flex-shrink-0" 
                > 
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /> 
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /> 
                </svg> 
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 6. Columna 4: Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Mantente Actualizado</h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Recibe insights sobre tecnología y estrategia digital directamente en tu bandeja de entrada.
          </p>
          <div className="flex items-center w-full relative">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="w-full bg-[#0A1220] border border-white/10 rounded-full py-3 px-4 pr-12 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-syntara-cyan/50 transition-colors"
            />
            <button 
              type="button"
              className="absolute right-1 top-1 bottom-1 bg-syntara-cyan text-black w-10 flex items-center justify-center rounded-full hover:bg-white transition-colors group"
              aria-label="Suscribirse"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 7. Barra Inferior (Copyright) */}
      <div className="mt-12 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <p>
          &copy; {new Date().getFullYear()} Syntara. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <Link href="/privacidad" className="hover:text-white transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-white transition-colors">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  )
}