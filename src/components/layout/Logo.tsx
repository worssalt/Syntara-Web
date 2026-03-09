import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
        <Image 
          src="/logo.png" 
          alt="Syntara Logo" 
          fill
          className="object-contain drop-shadow-md"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-base sm:text-lg tracking-tight text-white leading-none">SYNTARA</span>
        <span className="hidden sm:block text-xs text-muted-foreground tracking-wide mt-0.5 uppercase">Servicios Web y Sistemas a Medida</span>
      </div>
    </div>
  )
}