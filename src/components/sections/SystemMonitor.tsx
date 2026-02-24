"use client"

import { useState } from "react"
import { CheckCircle2, Loader2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SystemMonitor() {
  const [status, setStatus] = useState<"optimal" | "analyzing">("optimal")

  const runDiagnostics = () => {
    if (status === "analyzing") return
    setStatus("analyzing")
    setTimeout(() => {
      setStatus("optimal")
    }, 2000)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/10 font-mono text-sm relative group">
      {/* Window Header (MacOS style) */}
      <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="ml-auto text-[10px] text-white/30 font-medium">admin@syntara-core:~</div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 space-y-6">
        {/* Status Display */}
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="relative">
            {status === "optimal" ? (
              <div className="relative flex items-center justify-center">
                <div className="absolute w-full h-full bg-green-500/20 rounded-full animate-ping" />
                <div className="relative bg-green-500/10 p-4 rounded-full border border-green-500/20">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
              </div>
            ) : (
              <div className="relative bg-blue-500/10 p-4 rounded-full border border-blue-500/20 animate-pulse">
                <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
              </div>
            )}
          </div>
          
          <div className="text-center space-y-1">
            <h3 className={cn(
              "text-lg font-semibold transition-colors duration-300",
              status === "optimal" ? "text-green-400" : "text-blue-400"
            )}>
              {status === "optimal" ? "Estado del Sistema: Óptimo" : "Analizando bases de datos..."}
            </h3>
            <p className="text-xs text-white/40">
              {status === "optimal" ? "Todos los servicios operativos" : "Escaneando integridad y latencia..."}
            </p>
          </div>
        </div>

        {/* Metrics Simulation (Static decoration) */}
        <div className="space-y-3 pt-4 border-t border-white/5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/50">Uptime</span>
            <span className="text-green-400">99.99%</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/50">Latencia</span>
            <span className="text-green-400">24ms</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary/50 w-[85%]" />
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={runDiagnostics} 
          disabled={status === "analyzing"}
          variant="outline"
          className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white/80 hover:text-white"
        >
          {status === "analyzing" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Ejecutando diagnóstico...
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Simular Diagnóstico
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
