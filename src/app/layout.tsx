import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "RFP Digital Productions · Film, KI & 3D Cinema",
  description:
    "RFP Digital Productions erzählt komplexe Themen stark – Filme und visuelle Inhalte für Marken und Unternehmen, im Realdreh, als 2D/3D-Animation oder mit generativer KI.",
  keywords: [
    "RFP Digital Productions",
    "Filmproduktion",
    "KI-Filmproduktion",
    "Generative AI Video",
    "3D-Animation",
    "Produktvisualisierung",
    "Commercials & Cinema",
  ],
  authors: [{ name: "RFP Digital Productions" }],
  openGraph: {
    title: "RFP Digital Productions · Film, KI & 3D Cinema",
    description:
      "RFP Digital Productions erzählt komplexe Themen stark – Filme und visuelle Inhalte für Marken und Unternehmen, im Realdreh, als 2D/3D-Animation oder mit KI.",
    url: "https://rfpdigital.com",
    siteName: "RFP Digital Productions",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0d12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth antialiased dark">
      <body className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] selection:bg-[#6b54ee] selection:text-white font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
