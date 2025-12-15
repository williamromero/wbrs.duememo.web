import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - DuoMemo",
  description: "¿Tienes preguntas? Contáctanos y te ayudaremos.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl mb-6">
            <span className="text-3xl">💬</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Contáctanos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            ¿Tienes preguntas, sugerencias o encontraste un error? Nos encantaría escucharte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email General</h3>
                  <a href="mailto:hola@duomemo.app" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    hola@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center text-xl">
                  🐛
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Reportar Errores</h3>
                  <a href="mailto:bugs@duomemo.app" className="text-red-600 dark:text-red-400 hover:underline">
                    bugs@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/50 rounded-xl flex items-center justify-center text-xl">
                  💡
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Sugerencias</h3>
                  <a href="mailto:ideas@duomemo.app" className="text-violet-600 dark:text-violet-400 hover:underline">
                    ideas@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Síguenos</h3>
              <p className="text-sm opacity-90 mb-4">Mantente al día con las novedades de DuoMemo</p>
              <div className="flex gap-3">
                {["𝕏", "📷", "🎵"].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
