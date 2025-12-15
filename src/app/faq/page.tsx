import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - DuoMemo",
  description: "Encuentra respuestas a las preguntas más comunes sobre DuoMemo.",
};

const faqCategories = [
  {
    title: "🚀 Comenzando",
    questions: [
      {
        question: "¿Cómo empiezo a usar DuoMemo?",
        answer: "Descarga la app desde App Store o Google Play, crea una cuenta gratuita y comienza agregando tus primeras palabras.",
      },
      {
        question: "¿DuoMemo es gratis?",
        answer: "¡Sí! DuoMemo es completamente gratis con todas las funciones disponibles. Sin compras ni suscripciones.",
      },
      {
        question: "¿Necesito conexión a internet?",
        answer: "Necesitas internet para sincronizar, pero puedes estudiar offline con las palabras guardadas.",
      },
    ],
  },
  {
    title: "📚 Vocabulario",
    questions: [
      {
        question: "¿Qué tipo de contenido puedo guardar?",
        answer: "Palabras individuales, verbos con sus conjugaciones (infinitivo, presente, pasado, futuro), y oraciones completas.",
      },
      {
        question: "¿Cómo funciona la pronunciación?",
        answer: "Puedes agregar la pronunciación fonética de cada palabra para recordar cómo se dice.",
      },
    ],
  },
  {
    title: "🎮 Juegos",
    questions: [
      {
        question: "¿Qué juegos están disponibles?",
        answer: "Memory (encuentra pares), Quiz de Velocidad (responde antes que el tiempo), y Ahorcado (adivina letra por letra).",
      },
      {
        question: "¿Cuántas palabras necesito para jugar?",
        answer: "Para Memory y Speed Quiz necesitas 4 palabras. Para Ahorcado solo 1.",
      },
    ],
  },
  {
    title: "🎴 Flashcards",
    questions: [
      {
        question: "¿Cómo funcionan las tarjetas?",
        answer: "Muestran la palabra, al tocar giran para revelar la traducción. Luego marcas si la sabías.",
      },
      {
        question: "¿Se muestran las conjugaciones?",
        answer: "¡Sí! Al voltear una tarjeta de verbo, verás todas sus conjugaciones.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900/50 rounded-2xl mb-6">
            <span className="text-3xl">❓</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre DuoMemo
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h2>
              <FAQAccordion questions={category.questions} />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-3">¿No encontraste lo que buscabas?</p>
          <a
            href="mailto:hola@duomemo.app"
            className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 dark:hover:text-violet-300"
          >
            Escríbenos a hola@duomemo.app
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
