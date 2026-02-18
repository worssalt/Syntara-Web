export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M12 8L22 18L12 28" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter"/>
        <path d="M18 12L28 22L18 32" stroke="url(#paint0_linear)" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter"/>
        <defs>
          <linearGradient id="paint0_linear" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B7C7"/>
            <stop offset="0.5" stopColor="#2ECBD3"/>
            <stop offset="1" stopColor="#3B2F74"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-bold text-2xl tracking-tight text-foreground leading-none">SYNTARA</span>
        <span className="text-[0.65rem] text-muted-foreground tracking-widest uppercase mt-1">Web Services & Business Systems</span>
      </div>
    </div>
  )
}