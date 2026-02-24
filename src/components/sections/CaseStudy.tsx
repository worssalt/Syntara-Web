import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CaseStudy() {
  return (
    <section className="py-6 bg-background/50 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="mb-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Casos de Éxito: Negocios que ya transformamos
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto snap-x gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Card 1 */}
          <div className="w-[80%] md:w-[45%] flex-shrink-0 snap-center rounded-xl overflow-hidden border border-border/50 bg-card/40 backdrop-blur-sm group hover:border-primary/30 transition-colors">
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image 
                src="/images/restaurante-sistema.png" 
                alt="Sistema de Gestión Gastronómico" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 relative">
              
              <div className="absolute -top-6 left-6 md:left-8 z-20">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg tracking-wide">
                  SISTEMA DE GESTIÓN GASTRONÓMICO
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-1 mt-2">Control Total para Restaurante</h3>
                <p className="text-muted-foreground mb-3 line-clamp-3 leading-relaxed">
                  Automatizamos la atención al cliente, la gestión de mesas, el control de inventario y el registro de ventas en tiempo real desde diferentes dispositivos.
                </p>
                
                <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group/btn">
                  <Link href="/casos/sistema-restaurante" className="flex items-center gap-2">
                    Ver caso completo <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Placeholder Card for "More coming soon" to show scrollability */}
           <div className="w-[80%] md:w-[45%] flex-shrink-0 snap-center rounded-xl overflow-hidden border border-border/50 bg-muted/5 flex flex-col justify-center items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-muted/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Más casos de éxito</h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Pronto publicaremos más historias de transformación digital.
              </p>
           </div>

        </div>
      </div>
    </section>
  )
}
