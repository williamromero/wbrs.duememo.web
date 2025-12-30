"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const phones = [
  { src: "/screenshots/02-home.png", alt: "DuoMemo Home Screen" },
  { src: "/screenshots/04-games.png", alt: "DuoMemo Games" },
  { src: "/screenshots/06-cards.png", alt: "DuoMemo Flashcards" },
  { src: "/screenshots/03-addword.png", alt: "DuoMemo Add Word" },
  { src: "/screenshots/05-perfil.png", alt: "DuoMemo Profile" },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % phones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPhoneStyle = (index: number) => {
    const diff = (index - activeIndex + phones.length) % phones.length;

    const positions: { [key: number]: { x: number; scale: number; z: number; rotate: number; opacity: number } } = {
      0: { x: 0, scale: 1, z: 30, rotate: 0, opacity: 1 },
      1: { x: 120, scale: 0.75, z: 10, rotate: 8, opacity: 0.6 },
      2: { x: 180, scale: 0.5, z: -10, rotate: 15, opacity: 0 },
      3: { x: -180, scale: 0.5, z: -10, rotate: -15, opacity: 0 },
      4: { x: -120, scale: 0.75, z: 10, rotate: -8, opacity: 0.6 },
    };

    const pos = positions[diff] || positions[2];

    return {
      transform: `translateX(${pos.x}px) scale(${pos.scale}) rotateY(${pos.rotate}deg)`,
      zIndex: pos.z,
      opacity: pos.opacity,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-emerald-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-200 dark:bg-violet-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100 dark:bg-amber-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              100% Gratis • Sin Anuncios
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Aprende idiomas{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                jugando
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado cada día.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://apps.apple.com/us/app/duomemo/id6756503744"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Descargar en</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.webresstudio.duomemo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Disponible en</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Phone Carousel */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-[500px] sm:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-violet-500 rounded-[3rem] blur-3xl opacity-20 dark:opacity-30 scale-90"></div>

            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
              {phones.map((phone, index) => (
                <div
                  key={index}
                  className="absolute w-[220px] sm:w-[260px] cursor-pointer"
                  style={getPhoneStyle(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl shadow-gray-900/30">
                    <div className="rounded-[1.7rem] overflow-hidden bg-white">
                      <Image
                        src={phone.src}
                        alt={phone.alt}
                        width={260}
                        height={563}
                        className="w-full h-auto"
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {phones.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                      ? "w-8 bg-emerald-500"
                      : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
