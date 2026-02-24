"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const features = [
  {
    image: "/images/restaurante-dashboard.jpg",
    title: "Dashboard Financiero y Control en Tiempo Real",
    description: "Las funciones más importantes que se visualizan son los ingresos diarios, la disponibilidad de mesas, tickets promedio y el estado de todos tus pedidos en una sola pantalla. Toma decisiones basadas en datos reales al instante, además de alertarte siempre de algun cambio o emergencias de inventario.",
  },
  {
    image: "/images/restaurante-menu.png",
    title: "Gestión de Menú y Categorías Dinámicas",
    description: "Agrega, edita o elimina platos y categorías con un par de clics, inlcuso con la opcion de poner recetas para que se automatice con el inventario. Ajusta precios y disponibilidad al instante sin depender de soporte técnico.",
  },
  {
    image: "/images/restaurante-pedido.png",
    title: "Módulo Ágil de Toma de Pedidos",
    description: "Interfaz optimizada para tomar pedidos en segundos, calculando siempre el precio real y notando el tipo de orden. Reduce errores de comunicación con cocina y mejora la velocidad de atención por mesa.",
  },
  {
    image: "/images/restaurante-confirmacion.png",
    title: "Seguimiento y Confirmación al Instante",
    description: "Control exacto desde que el pedido entra hasta que se sirve. Evita confusiones y garantiza que cada cliente reciba exactamente lo que pidió, incluso si hubo agregados de pedidos adicionales luego de una orden dada.",
  },
]

export function RestaurantSystemContent() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<{
    image: string
    title: string
    description: string
  } | null>(null)

  const handleOpenModal = (item: typeof features[0]) => {
    setActiveItem(item)
    setIsOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/restaurante-sistema.png"
            alt="Fondo Restaurante"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
              Sistema Integral de Gestión para Restaurantes
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              Potencia tu negocio gastronómico con tecnología de vanguardia.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button asChild className="px-5 py-2 text-sm md:text-base md:px-8 md:py-3 h-auto rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                <Link href="/contacto">
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Control Total de tu Operación
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada módulo ha sido diseñado pensando en la eficiencia y la experiencia del usuario.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <button
                  onClick={() => handleOpenModal(feature)}
                  className="group w-full h-full bg-card border border-border/50 rounded-xl overflow-hidden shadow-lg p-4 md:p-6 text-left hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-sm bg-muted mb-6 flex-shrink-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle overlay gradient on image for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icono de zoom/ver más */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <span className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Ver detalles
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2 pb-2 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {feature.description}
                    </p>
                    <div className="mt-auto pt-4 text-primary text-sm font-medium flex items-center gap-2">
                      Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / ROI Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Impacto Real en el Negocio</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nuestros clientes reportan mejoras significativas en sus operaciones desde la primera semana de implementación.
              </p>
              <div className="space-y-4">
                {[
                  "Eliminación de errores en comandas",
                  "Alta seguridad a cualquier tipo de ataque cibernético",
                  "Cierre de caja automático y sin diferencias",
                  "Actualización de precios en tiempo real por todos los dispositivos conectados",
                  "Mayor ventas y atención de mesas por agilidad en pedidos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">+30%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Más Ventas</div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">-hrs</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Tiempo ahorrado en pedidos </div>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-card to-muted p-8 rounded-2xl shadow-lg border border-border/50 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Control de Inventario</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ¿Listo para modernizar tu restaurante?
          </h2>
          <Button asChild className="w-[90%] max-w-sm mx-auto text-base py-3 px-6 md:w-auto md:text-xl md:py-5 md:px-10 h-auto rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
            <Link href="/contacto">
              Hablar con un experto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 overflow-y-auto">
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-black/50">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {activeItem.title}
                </h3>
                
                <div className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {activeItem.description}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
