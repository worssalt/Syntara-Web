import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SYNTARA | Productos digitales y servicios",
  description: "Agencia para emprendedores y PYMEs: sitios, apps y productos digitales que venden. Desarrollo rápido y soporte accesible.",
  openGraph: {
    siteName: "SYNTARA",
    type: "website",
    title: "SYNTARA | Productos digitales y servicios",
    description: "Sitios, apps y productos digitales para emprendedores y PYMEs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNTARA | Productos digitales y servicios",
    description: "Sitios, apps y productos digitales para emprendedores y PYMEs.",
  },
  icons: {
    icon: "/logo.png",
  },
};
// Optional Google Analytics (define NEXT_PUBLIC_GA_ID to enable)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary`}>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}

        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}