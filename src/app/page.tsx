import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { SuccessStoriesCarousel } from '@/components/sections/SuccessStoriesCarousel'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <SuccessStoriesCarousel />
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Escríbenos y te responderemos en menos de 24 horas.
            </p>
          </div>
          <ContactSection />
        </div>
      </section>
    </div>
  )
}
