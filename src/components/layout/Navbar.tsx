import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              width={0} 
              height={0} 
              sizes="100vw"
              alt="SYNTARA Logo" 
              className="w-auto h-10 md:h-14"
            />
            <div className="flex flex-col justify-center">
              <span className="font-bold text-2xl tracking-tight text-foreground leading-none">SYNTARA</span>
              <span className="text-[0.65rem] text-muted-foreground tracking-widest uppercase mt-1">Web Services & Business Systems</span>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/servicios-web" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Servicios Web
          </Link>
          <Link href="/sistemas-medida" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sistemas
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Nosotros
          </Link>
          <Link href="/contacto">
            <Button variant="default" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-lg shadow-primary/20">
              Contacto
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}