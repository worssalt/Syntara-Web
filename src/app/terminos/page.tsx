import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Uso | SYNTARA",
  description: "Términos y condiciones de uso del sitio web de SYNTARA.",
}

export default function TerminosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background border-b border-border/50">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Términos de <span className="text-primary">Uso</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Última actualización: enero de 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container px-6 mx-auto max-w-3xl">

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Objeto</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            El presente documento regula el acceso y uso del sitio web de SYNTARA, así como los servicios ofrecidos a través del mismo. El uso del sitio implica la aceptación plena de estos términos.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. Propiedad intelectual</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Todos los contenidos del sitio (textos, imágenes, diseños, código, logotipos) son propiedad de SYNTARA o de sus colaboradores y están protegidos por la legislación vigente en materia de propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Limitación de responsabilidad</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SYNTARA no garantiza la disponibilidad ininterrumpida del sitio web y no se hace responsable de los daños derivados del uso o imposibilidad de uso del mismo, ni de los errores u omisiones en los contenidos.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Presupuestos y contratación</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            El envío del formulario de contacto no implica la aceptación de ningún compromiso contractual por parte de SYNTARA. Los proyectos serán formalizados mediante contrato escrito firmado por ambas partes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">5. Ley aplicable y jurisdicción</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Madrid (España), salvo disposición legal en contrario.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">6. Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Para cualquier consulta sobre estos términos, puedes contactarnos en{" "}
            <a href="mailto:hola@syntara.com" className="text-primary underline">
              hola@syntara.com
            </a>.
          </p>

        </div>
      </section>
    </div>
  )
}
