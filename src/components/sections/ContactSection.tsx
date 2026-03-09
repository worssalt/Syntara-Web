import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/forms/ContactForm"

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 relative z-10">
      {/* Contact Info */}
      <div className="space-y-8">
        <div className="p-4 md:p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <h2 className="text-2xl font-bold mb-8 text-white">Información de Contacto</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-syntara-cyan/10 border border-syntara-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-syntara-cyan/20 group-hover:border-syntara-cyan/40 transition-all duration-300">
                <Mail className="h-6 w-6 text-syntara-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                <p className="text-gray-400">
                  <a href="mailto:hola@syntara.biz" className="hover:text-syntara-cyan transition-colors">
                    hola@syntara.biz
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-syntara-cyan/10 border border-syntara-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-syntara-cyan/20 group-hover:border-syntara-cyan/40 transition-all duration-300">
                <Phone className="h-6 w-6 text-syntara-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Teléfono</h3>
                <p className="text-gray-400">
                  <a href="tel:+51970216616" className="hover:text-syntara-cyan transition-colors">
                    +51 970216616
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">Lunes a Sabado, 9:00 - 18:00</p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-syntara-cyan/10 border border-syntara-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-syntara-cyan/20 group-hover:border-syntara-cyan/40 transition-all duration-300">
                <MapPin className="h-6 w-6 text-syntara-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Oficinas Centrales</h3>
                <p className="text-gray-400 leading-relaxed">
                  La Libertad, Trujillo<br />
                  13001 Trujillo, Perú
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-syntara-cyan/5 backdrop-blur-md border border-syntara-cyan/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-syntara-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-start gap-4 relative z-10">
            <Clock className="h-6 w-6 text-syntara-cyan shrink-0 mt-1 drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
            <div>
              <h3 className="font-bold text-white mb-2">Tiempo de Respuesta Garantizado</h3>
              <p className="text-sm text-gray-300/90 leading-relaxed">
                Para consultas comerciales, nos comprometemos a responder en un plazo máximo de 24 horas laborables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative overflow-hidden">
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-syntara-cyan/50 to-transparent opacity-50"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Envíanos un mensaje</h2>
        <ContactForm />
      </div>
    </div>
  )
}
