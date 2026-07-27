import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import AnnouncementPopup from "./components/AnnouncementPopup";
import WhatsAppFloat from "./components/WhatsAppFloat";
const garageFallback = Oswald({
  variable: "--font-garage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const neueFallback = Inter({
  variable: "--font-neue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UCA UAE | University for the Creative Arts",
  description:
    "Study creative arts, business, computing, design, and media programmes at UCA UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${garageFallback.variable} ${neueFallback.variable} h-full antialiased`}
    >
      <AnnouncementPopup />

      <body className="min-h-full flex flex-col font-neue">
        
        <Navbar />
        <WhatsAppFloat/>
        {children}
      <Footer/>
      </body>

    </html>
  );
}