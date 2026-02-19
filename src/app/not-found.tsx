import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "404 — Página no encontrada | SYNTARA",
  description: "La página que buscas no existe o fue movida. Vuelve al inicio o contáctanos.",
}

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">404 — Página no encontrada</h1>
        <p className="text-muted-foreground mb-6">
          Lo sentimos — no hemos encontrado la página que buscas. Puede haber sido movida o eliminada.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button variant="outline">Volver al inicio</Button>
          </Link>
          <Link href="/contacto">
            <Button>Contactar</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
