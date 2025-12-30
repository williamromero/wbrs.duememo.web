import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.duomemo.site"),
  title: "DuoMemo - Aprende idiomas jugando",
  description: "Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado. Tu compañero perfecto para aprender idiomas.",
  keywords: ["aprender idiomas", "vocabulario", "flashcards", "juegos educativos", "memoria", "aprendizaje"],
  authors: [{ name: "DuoMemo Team" }],
  openGraph: {
    title: "DuoMemo - Aprende idiomas jugando",
    description: "Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado.",
    type: "website",
    locale: "es_ES",
    url: "https://www.duomemo.site",
    siteName: "DuoMemo",
    images: [
      {
        url: "/screenshots/00-homepage.png",
        width: 1200,
        height: 630,
        alt: "DuoMemo - Aprende idiomas jugando",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DuoMemo - Aprende idiomas jugando",
    description: "Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado.",
    images: ["/screenshots/00-homepage.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('duomemo-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
