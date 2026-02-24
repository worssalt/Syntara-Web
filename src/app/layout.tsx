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
  // favicons and manifest generated from /public
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-[100svh] flex flex-col bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary`}>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}

        <Navbar />
        <main className="flex-1 pt-20" style={{ paddingTop: "calc(5rem + env(safe-area-inset-top))" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}