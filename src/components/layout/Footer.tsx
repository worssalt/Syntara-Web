import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            width={0} 
            height={0} 
            sizes="100vw"
            alt="SYNTARA Logo" 
            className="w-auto h-8 md:h-10"
          />
          <span className="font-bold text-xl tracking-tight text-foreground">SYNTARA</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SYNTARA. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}