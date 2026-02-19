import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | SYNTARA",
  description: "Política de privacidad de SYNTARA. Cómo recopilamos, usamos y protegemos tus datos personales.",
}

export default function PrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-background border-b border-border/50">
        <div className="container px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Política de <span className="text-primary">Privacidad</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Última actualización: enero de 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container px-6 mx-auto max-w-3xl prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground">

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Responsable del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SYNTARA (en adelante, «la empresa») es responsable del tratamiento de tus datos personales recogidos a través de este sitio web. Puedes contactarnos en <a href="mailto:hola@syntara.com" className="text-primary underline">hola@syntara.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. Datos que recopilamos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del formulario de contacto:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-6">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Nombre de tu negocio (opcional)</li>
            <li>Tipo de servicio de interés</li>
            <li>Descripción de tu proyecto</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Finalidad del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Tus datos se usan exclusivamente para responder a tu solicitud de presupuesto o consulta comercial y, si nos lo autorizas expresamente, para enviarte comunicaciones sobre nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Base jurídica</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            El tratamiento está basado en tu consentimiento expreso (art. 6.1.a del RGPD), que otorgas al marcar la casilla correspondiente en el formulario.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">5. Conservación de datos</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y, como máximo, durante 2 años desde el último contacto.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">6. Derechos del usuario</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a <a href="mailto:hola@syntara.com" className="text-primary underline">hola@syntara.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">7. Transferencias de datos</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Los datos del formulario se procesan a través de <a href="https://web3forms.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">Web3Forms</a>, un servicio de terceros que actúa como encargado del tratamiento y que cumple con las garantías del RGPD.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">8. Cambios en esta política</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nos reservamos el derecho de actualizar esta política. Cualquier cambio relevante será comunicado a través de esta misma página.
          </p>

        </div>
      </section>
    </div>
  )
}
