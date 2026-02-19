"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ErrorProps {
  error: Error
  reset: () => void
}

export function metadata() {
  return {
    title: "Error — SYNTARA",
  }
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center bg-card border border-border rounded-2xl p-10">
        <h2 className="text-2xl font-bold mb-4">Ha ocurrido un error</h2>
        <p className="text-muted-foreground mb-6">{error?.message || "Se ha producido un error inesperado."}</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()} variant="outline">Reintentar</Button>
          <Link href="/contacto">
            <Button>Contactar soporte</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
