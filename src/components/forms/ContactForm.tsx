"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Introduce un email válido.",
  }),
  company: z.string().optional(),
  service: z.string().min(1, {
    message: "Selecciona un tipo de servicio.",
  }),
  message: z.string().min(10, {
    message: "Cuéntanos un poco más sobre tu proyecto (min 10 caracteres).",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad para continuar.",
  }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
      consent: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setErrorMessage(null)
    
    try {
      // Usar Web3Forms directamente o simular si no hay clave configurada
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      // Excluir consent del payload — es solo validación local
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { consent: _consent, ...formData } = values

      if (accessKey) {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, access_key: accessKey }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || "Error al enviar el formulario")
        }
      } else {
        // Simulación de envío exitoso si no hay clave (para no romper en desarrollo/demo)
        console.log("Simulando envío de formulario (Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY)", formData)
        await new Promise((resolve) => setTimeout(resolve, 1500))
      }

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error(error)
      setErrorMessage(error instanceof Error ? error.message : "Ha ocurrido un error inesperado")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-xl animate-fade-in">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">¡Mensaje Recibido!</h3>
        <p className="text-muted-foreground mb-6">
          Gracias por tu mensaje. Te responderemos en menos de 24 horas.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Ej. Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="juan@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Negocio (opcional)</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de tu tienda/negocio (opcional)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Servicio de Interés</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ecommerce">Tienda online (E‑commerce)</SelectItem>
                    <SelectItem value="landing">Landing / Producto digital</SelectItem>
                    <SelectItem value="personal">Sitio personal / Portafolio</SelectItem>
                    <SelectItem value="maintenance">Mantenimiento y soporte mensual</SelectItem>
                    <SelectItem value="marketing">Marketing & CRO</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalles del Proyecto</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe brevemente tus necesidades..."
                  className="resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value as boolean}
                  onChange={field.onChange}
                  className="mt-1 h-4 w-4 rounded border-border accent-primary cursor-pointer"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal cursor-pointer">
                  He leído y acepto la{" "}
                  <Link href="/privacidad" className="text-primary underline hover:no-underline" target="_blank">
                    política de privacidad
                  </Link>{" "}
                  y los{" "}
                  <Link href="/terminos" className="text-primary underline hover:no-underline" target="_blank">
                    términos de uso
                  </Link>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        {errorMessage && (
          <div className="flex items-center p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
            <AlertCircle className="h-4 w-4 mr-2" />
            {errorMessage}
          </div>
        )}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar Solicitud"
          )}
        </Button>
      </form>
    </Form>
  )
}
