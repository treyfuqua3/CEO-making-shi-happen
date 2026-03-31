import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRUbath Houston | Premium Porcelain Bathroom Systems",
  description:
    "Houston's exclusive TRUbath partner. Premium porcelain bathroom systems for remodelers, contractors, and dealer partners. Beautiful finishes, streamlined installation, scalable growth.",
  keywords: [
    "TRUbath",
    "Houston bathroom remodel",
    "porcelain bathroom systems",
    "bathroom dealer",
    "bathroom contractor Houston",
    "premium bathroom installation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
