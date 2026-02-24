"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import { Button } from "@/components/ui/button"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

interface Slide {
  id: number
  tag: string
  title: string
  description: string
  image: string
  link: string
}

export function SuccessStoriesCarousel() {
  const [mounted, setMounted] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const slides = [
    {
      id: 1,
      tag: "SISTEMA DE GESTIÓN GASTRONÓMICO",
      title: "Control Total para Restaurante",
      description: "Automatizamos la atención al cliente, la gestión de mesas, el control de inventario y el registro de ventas en tiempo real desde diferentes dispositivos.",
      image: "/images/restaurante-sistema.png",
      link: "/casos/sistema-restaurante"
    }
  ]

  if (!mounted) return null

  return (
    <section className="w-full py-16 bg-muted/5 [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-button-next]:hidden md:[&_.swiper-button-next]:flex [&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:hidden md:[&_.swiper-button-prev]:flex [&_.swiper-button-prev]:text-primary relative">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Casos de Éxito
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Descubre cómo ayudamos a empresas a transformar sus procesos con tecnología a medida.
        </p>
      </div>

      <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="w-full pb-12 px-12 md:px-24 !pb-16"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="h-auto px-1">
              <div className="bg-card rounded-2xl overflow-hidden shadow-md h-full flex flex-col border border-border/50 hover:border-primary/30 transition-colors group">
                {/* Imagen superior con funcionalidad Lightbox */}
                <div 
                  className="relative w-full h-64 overflow-hidden cursor-zoom-in group/image"
                  onClick={() => {
                    setSelectedSlide(slide)
                    setLightboxOpen(true)
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover/image:opacity-40 transition-opacity" />
                  
                  {/* Icono de zoom indicador */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
                  </div>
                </div>

                {/* Contenido inferior */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  <div className="mb-4 relative z-10">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full tracking-wide border border-primary/20">
                      {slide.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors relative z-10">
                    {slide.title}
                  </h3>
                  
                  {/* Descripción con altura mínima en móvil */}
                  <p className="text-muted-foreground mb-6 line-clamp-4 md:line-clamp-3 leading-relaxed flex-grow relative z-10 min-h-[5rem] md:min-h-0">
                    {slide.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-border/50 relative z-10 flex items-center justify-between md:block">
                    <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group/btn text-sm md:text-base">
                      <Link href={slide.link} className="flex items-center gap-2">
                        Ver caso completo 
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedSlide && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Botón cerrar flotante grande */}
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div 
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[50vh] md:h-[70vh] mb-6">
              <Image
                src={selectedSlide.image}
                alt={selectedSlide.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="text-center text-white max-w-2xl px-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedSlide.title}</h3>
              <p className="text-gray-300 text-base md:text-lg">{selectedSlide.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}