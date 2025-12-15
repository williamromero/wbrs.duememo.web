import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DuoMemo - Aprende idiomas jugando",
  description: "Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado. Tu compañero perfecto para aprender idiomas.",
  keywords: ["aprender idiomas", "vocabulario", "flashcards", "juegos educativos", "memoria", "aprendizaje"],
  authors: [{ name: "DuoMemo Team" }],
  openGraph: {
    title: "DuoMemo - Aprende idiomas jugando",
    description: "Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
