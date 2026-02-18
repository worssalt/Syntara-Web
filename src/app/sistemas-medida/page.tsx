"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Lock, Server, Code2, LayoutDashboard, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function SistemasMedidaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container px-6 mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              Soluciones Enterprise
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              ERPs y Software de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Gestión B2B
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Centraliza operaciones, automatiza procesos y escala tu negocio con sistemas a medida. 
              Arquitectura robusta diseñada para el crecimiento.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-12 shadow-lg shadow-primary/20">
                Inicia tu Transformación Digital
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 bg-muted/20">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]"
          >
            
            {/* Item 1: Secure Architecture (Large) */}
            <motion.div 
              className="md:col-span-2 md:row-span-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-card to-card/50 border-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32 transition-all group-hover:bg-primary/10" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Database className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Arquitectura Segura y Escalable</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-muted-foreground text-lg">
                    Construimos sobre cimientos sólidos. Priorizamos la integridad de tus datos y la seguridad de acceso desde la primera línea de código.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                      <div className="flex items-center gap-2 mb-2 text-foreground font-medium">
                        <Database className="h-4 w-4 text-accent" />
                        Base de Datos Relacional
                      </div>
                      <p className="text-sm text-muted-foreground">PostgreSQL optimizado para consultas complejas y consistencia de datos ACID.</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                      <div className="flex items-center gap-2 mb-2 text-foreground font-medium">
                        <Lock className="h-4 w-4 text-accent" />
                        Autenticación Estricta
                      </div>
                      <p className="text-sm text-muted-foreground">Control de acceso basado en roles (RBAC) y autenticación multifactor.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Item 2: Code Placeholder (Tall) */}
            <motion.div 
              className="md:row-span-2 relative group overflow-hidden rounded-xl border border-border/50 bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-muted/40 flex flex-col items-center justify-center p-6 text-center z-20 group-hover:bg-muted/30 transition-colors">
                 <Code2 className="h-12 w-12 text-muted-foreground/50 mb-4 group-hover:text-primary/80 transition-colors" />
                 <span className="text-muted-foreground font-medium border border-dashed border-muted-foreground/30 px-3 py-1 rounded-md">
                   Placeholder: Código Backend
                 </span>
                 <p className="text-xs text-muted-foreground mt-2">Muestra de código limpio y estructurado</p>
              </div>
              {/* Fake Code Background */}
              <div className="absolute inset-0 opacity-10 p-4 font-mono text-[10px] overflow-hidden select-none pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="whitespace-nowrap">
                    <span className="text-blue-500">function</span> <span className="text-yellow-500">processData</span>(data: <span className="text-green-500">SecureData</span>) {'{'}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Item 3: Dashboard Placeholder (Wide) */}
            <motion.div 
              className="md:col-span-2 relative group overflow-hidden rounded-xl border border-border/50 bg-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
               <Image 
                 src="/images/dashboard.png" 
                 alt="Dashboard Analítico" 
                 fill 
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
               />
            </motion.div>

            {/* Item 4: Server/Infrastructure */}
            <motion.div 
              className="bg-card border border-border/50 rounded-xl relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Image 
                src="/images/servidores.png" 
                alt="Infraestructura Dedicada" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Tu empresa necesita una solución a medida?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Analizamos tus procesos y diseñamos la herramienta exacta que necesitas.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 shadow-lg shadow-primary/20">
                Inicia tu Transformación Digital
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
