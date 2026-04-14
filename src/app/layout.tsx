import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fuquafinishes.com"),
  title: "Fuqua Finishes LLC | Houston's Trusted Source for Quality Materials",
  description:
    "Fuqua Finishes LLC is Houston's premier materials supplier for contractors, builders, and homeowners. Featuring TRUbath porcelain systems and a curated collection of designer finishes.",
  keywords:
    "Fuqua Finishes LLC, Houston materials supplier, TRUbath materials, porcelain finishes Houston, contractor material supplier Houston, building finishes Houston, Statuario Leonardo, Calacatta Oro, Lims Ivory, Onyx White Alabaster",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.fuquafinishes.com",
    title: "Fuqua Finishes LLC | Houston's Premium Architectural Finishes",
    description:
      "Houston's trusted source for TRUbath porcelain systems and a curated collection of designer finishes — Statuario Leonardo, Calacatta Oro, Lims Ivory, and Onyx White Alabaster.",
    siteName: "Fuqua Finishes LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuqua Finishes LLC | Houston's Premium Architectural Finishes",
    description:
      "Houston's trusted source for TRUbath porcelain systems and designer architectural finishes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
