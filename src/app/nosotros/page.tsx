import type { Metadata } from "next"
import { NosotrosContent } from "./NosotrosContent"

export const metadata: Metadata = {
  title: "Nosotros | SYNTARA — Tu aliado para emprendedores y PYMEs",
  description: "Ayudamos a emprendedores y PYMEs a lanzar y escalar negocios digitales con diseño, desarrollo y soporte asequible.",
  openGraph: {
    title: "Nosotros | SYNTARA",
    description: "Tu aliado para emprendedores y PYMEs. Diseño, desarrollo y soporte.",
    type: "website",
    siteName: "SYNTARA",
  },
}

export default function NosotrosPage() {
  return <NosotrosContent />
}
