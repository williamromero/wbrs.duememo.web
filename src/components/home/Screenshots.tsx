"use client";

import { useState } from "react";
import Image from "next/image";

const screenshots = [
  {
    id: 1,
    src: "/screenshots/02-home.png",
    title: "Pantalla Principal",
    description: "Todas tus palabras organizadas",
  },
  {
    id: 2,
    src: "/screenshots/03-addword.png",
    title: "Agregar Palabras",
    description: "Añade vocabulario fácilmente",
  },
  {
    id: 3,
    src: "/screenshots/04-games.png",
    title: "Hub de Juegos",
    description: "3 juegos para practicar",
  },
  {
    id: 4,
    src: "/screenshots/06-cards.png",
    title: "Flashcards",
    description: "Repasa con tarjetas interactivas",
  },
  {
    id: 5,
    src: "/screenshots/05-perfil.png",
    title: "Tu Perfil",
    description: "Estadísticas y progreso",
  },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-200 dark:border-amber-800">
            📱 Vista Previa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Mira DuoMemo en acción
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Un diseño limpio, moderno y súper intuitivo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-violet-500 rounded-[3rem] blur-3xl opacity-20 dark:opacity-30 scale-110"></div>

              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-gray-900/20">
                <div className="relative rounded-[2rem] overflow-hidden bg-white w-[280px] sm:w-[320px]">
                  <Image
                    src={screenshots[activeIndex].src}
                    alt={screenshots[activeIndex].title}
                    width={320}
                    height={693}
                    className="w-full h-auto transition-opacity duration-300"
                    priority
                  />
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1 w-full lg:w-auto">
              <div className="space-y-3">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${index === activeIndex
                        ? "bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-500 shadow-lg"
                        : "bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                  >
                    <div className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 ${index === activeIndex ? "border-emerald-500" : "border-gray-200 dark:border-gray-600"
                      }`}>
                      <Image
                        src={screenshot.src}
                        alt={screenshot.title}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold ${index === activeIndex ? "text-emerald-700 dark:text-emerald-400" : "text-gray-900 dark:text-white"
                        }`}>
                        {screenshot.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {screenshot.description}
                      </div>
                    </div>

                    {index === activeIndex && (
                      <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {[
            { icon: "🌙", label: "Modo Oscuro", desc: "Cuida tus ojos" },
            { icon: "📴", label: "Funciona Offline", desc: "Sin internet" },
            { icon: "🔄", label: "Sincronización", desc: "Entre dispositivos" },
            { icon: "🆓", label: "100% Gratis", desc: "Sin compras" },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
