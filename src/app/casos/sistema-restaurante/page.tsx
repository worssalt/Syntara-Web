import type { Metadata } from "next"
import { RestaurantSystemContent } from "./RestaurantSystemContent"

export const metadata: Metadata = {
  title: "Sistema de Gestión para Restaurantes | Casos de Éxito SYNTARA",
  description: "Descubre cómo nuestro sistema integral de gestión transformó la operación de restaurantes, eliminando errores y automatizando procesos.",
  alternates: {
    canonical: "https://syntara.biz/casos/sistema-restaurante",
  },
  openGraph: {
    title: "Sistema de Gestión para Restaurantes | Casos de Éxito SYNTARA",
    description: "Descubre cómo nuestro sistema integral de gestión transformó la operación de restaurantes, eliminando errores y automatizando procesos.",
    url: "https://syntara.biz/casos/sistema-restaurante",
    siteName: "SYNTARA",
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestión para Restaurantes | Casos de Éxito SYNTARA",
    description: "Descubre cómo nuestro sistema integral de gestión transformó la operación de restaurantes.",
  },
}

export default function RestaurantSystemPage() {
  return <RestaurantSystemContent />
}
