"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Logo } from "@/components/layout/Logo"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/60 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo Section */}
        <Link href="/" className="z-20 hover:opacity-90 transition-opacity">
          <Logo />
        </Link>

        {/* Center Navigation - Absolute Positioned */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:gap-10">
          {[
            { name: "Inicio", href: "/" },
            { name: "Servicios", href: "/servicios-web" },
            { name: "Sistemas", href: "/sistemas-medida" },
            { name: "Nosotros", href: "/nosotros" },
          ].map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 tracking-wide group ${isActive ? "text-syntara-cyan" : "text-gray-400 hover:text-syntara-cyan"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-syntara-cyan transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            )
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 z-20">
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2 md:gap-4 border-r border-white/10 pr-6 mr-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all duration-300">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              > 
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/> 
              </svg> 
            </a>
          </div>

          <Link href="/contacto" className="hidden md:block">
            <Button 
              variant="outline" 
              className="relative overflow-hidden bg-cyan-950/30 border border-syntara-cyan/50 text-cyan-50 hover:text-white btn-glow-cyan hover:bg-cyan-500/10 transition-all duration-200 rounded-md px-8 font-medium tracking-wide"
            >
              <span className="relative z-10">Contacto</span>
            </Button>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030303]/95 border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {[
                { name: "Inicio", href: "/" },
                { name: "Servicios", href: "/servicios-web" },
                { name: "Sistemas", href: "/sistemas-medida" },
                { name: "Nosotros", href: "/nosotros" },
              ].map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors border-l-2 pl-3 ${isActive ? "text-syntara-cyan border-syntara-cyan" : "text-gray-300 border-transparent hover:text-cyan-400 hover:border-cyan-400/50"}`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link href="/contacto" onClick={() => setOpen(false)} className="mt-4">
                <Button className="w-full bg-cyan-900/40 border border-cyan-500/50 text-cyan-50 hover:bg-cyan-800/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                  Contacto
                </Button>
              </Link>

              {/* Social Icons (Mobile) */}
              <div className="flex items-center justify-center gap-8 mt-4 pt-6 border-t border-white/10">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-syntara-cyan transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}