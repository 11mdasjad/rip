import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { DataProvider } from "@/context/DataContext";

export const metadata: Metadata = {
  title: "RFP Digital Productions · Film, AI & 3D Cinema",
  description:
    "RFP Digital Productions tells complex stories powerfully – films and visual content for global brands and enterprises, live-action, 2D/3D animation, or generative AI.",
  keywords: [
    "RFP Digital Productions",
    "Film Production",
    "AI Film Production",
    "Generative AI Video",
    "3D Animation",
    "Product Visualization",
    "Commercials & Cinema",
  ],
  authors: [{ name: "RFP Digital Productions" }],
  openGraph: {
    title: "RFP Digital Productions · Film, AI & 3D Cinema",
    description:
      "RFP Digital Productions tells complex stories powerfully – films and visual content for global brands and enterprises, live-action, 2D/3D animation, or generative AI.",
    url: "https://rfpdigital.com",
    siteName: "RFP Digital Productions",
    locale: "en_US",
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
    <html lang="en" className="scroll-smooth antialiased dark">
      <body className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] selection:bg-[#6b54ee] selection:text-white font-sans">
        <LanguageProvider>
          <DataProvider>{children}</DataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
