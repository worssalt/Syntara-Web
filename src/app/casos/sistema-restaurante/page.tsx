import type { Metadata } from "next"
import { RestaurantSystemContent } from "./RestaurantSystemContent"

export const metadata: Metadata = {
  title: "Sistema de Gestión para Restaurantes | Casos de Éxito SYNTARA",
  description: "Descubre cómo nuestro sistema integral de gestión transformó la operación de restaurantes, eliminando errores y automatizando procesos.",
}

export default function RestaurantSystemPage() {
  return <RestaurantSystemContent />
}
