import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { DataProvider } from "@/context/DataContext";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RFP Digital Productions | Video Production & Election Management Company",
  description:
    "Hire RFP Digital Productions for your Digital Media needs. Managed by media professionals from AJK MCRC, Jamia Millia Islamia. Over 17+ years of media excellence in Corporate Films, Documentaries, Election Campaigns, Social Media Management, and Photography.",
  keywords: [
    "RFP Digital Productions",
    "video production company delhi",
    "election management company",
    "corporate films delhi",
    "documentary films india",
    "mobile LED vans",
    "election prachar songs",
    "social media management",
    "digital marketing agency",
    "event photography"
  ],
  authors: [{ name: "RFP Digital Productions" }],
  openGraph: {
    title: "RFP Digital Productions | Video Production & Election Management Company",
    description:
      "Hire RFP Digital Productions for your Digital Media needs. Over 17+ years of media excellence in Corporate Films, Documentaries, Election Campaigns, and Digital Media.",
    url: "https://www.rfpdigital.com",
    siteName: "RFP Digital Productions",
    locale: "en_IN",
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
    <html lang="en" className={`scroll-smooth antialiased dark ${manrope.variable}`}>
      <body className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] selection:bg-[#6b54ee] selection:text-white font-sans">
        <LanguageProvider>
          <DataProvider>{children}</DataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
