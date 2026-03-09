import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
        <Image 
          src="/logo.png" 
          alt="Syntara Logo" 
          fill
          className="object-contain drop-shadow-md"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl sm:text-2xl tracking-tight text-white leading-none">SYNTARA</span>
        <span className="hidden sm:block text-xs text-muted-foreground tracking-wide mt-0.5 uppercase">Servicios Web y Sistemas a Medida</span>
      </div>
    </div>
  )
}