import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "RC Armazenagem — Armazenagem e Transporte de Carga Regulada",
    template: "%s - RC Armazenagem",
  },
  description:
    "Armazenagem certificada com transporte incluso: recebimento, estocagem e expedição de cosméticos, químicos e medicamentos num único fornecedor.",
  icons: {
    icon: "/assets-visuais/logo-simbolo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: "RC Armazenagem — Armazenagem e Transporte de Carga Regulada",
    description:
      "Armazenagem certificada com transporte incluso: recebimento, estocagem e expedição de cosméticos, químicos e medicamentos num único fornecedor.",
    images: ["/assets-visuais/hero-armazenagem-poster.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${ibmSans.variable} ${ibmMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-fundo font-sans text-texto">
        <JsonLd />
        <Header />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
