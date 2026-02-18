import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-70" />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl opacity-50" />

      <div className="container relative z-10 px-6 mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium animate-fade-in-up">
          Innovación Digital B2B
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          Soluciones Tecnológicas <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-indigo-500">
            Rentables y Seguras
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos tu empresa con desarrollo web de alto rendimiento y sistemas a medida diseñados para escalar y proteger tus activos digitales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contacto">
            <Button size="lg" className="min-w-[180px] h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              Solicitar Consultoría
            </Button>
          </Link>
          <Link href="/servicios-web">
            <Button variant="outline" size="lg" className="min-w-[180px] h-12 text-base group border-primary/20 hover:border-primary/50 hover:bg-primary/5">
              Ver Servicios
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}