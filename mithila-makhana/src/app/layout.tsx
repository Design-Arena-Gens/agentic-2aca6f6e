import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mithila Makhana | Artisanal Foxnuts from Bihar",
  description:
    "Discover premium Mithila Makhana sourced ethically from Bihar. Shop nutrient-rich foxnuts, crafted with heritage roasting techniques and vibrant regional flavors.",
  keywords: [
    "Mithila Makhana",
    "foxnuts",
    "makhana snacks",
    "healthy snacks",
    "Bihar specialties",
  ],
  openGraph: {
    title: "Mithila Makhana | Artisanal Foxnuts from Bihar",
    description:
      "Experience the crunch of heirloom Mithila Makhana. Slow roasted, spice kissed, and sealed fresh from the ponds of Bihar.",
    url: "https://agentic-2aca6f6e.vercel.app",
    type: "website",
  },
  metadataBase: new URL("https://agentic-2aca6f6e.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
