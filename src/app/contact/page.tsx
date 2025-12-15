import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - DuoMemo",
  description: "¿Tienes preguntas o sugerencias? Contáctanos y te responderemos pronto.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--bg-light)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[var(--accent-light)] text-[var(--accent-dark)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✉️ Contacto
          </span>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas, escuchar sugerencias o ayudarte con cualquier problema.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--border)]">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
              Envíanos un mensaje
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary-light)] rounded-xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)] mb-2">Para consultas generales</p>
                  <a href="mailto:hola@duomemo.app" className="text-[var(--primary)] hover:underline font-medium">
                    hola@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--secondary-light)] rounded-xl flex items-center justify-center text-2xl">
                  🐛
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Reportar un Bug</h3>
                  <p className="text-[var(--text-secondary)] mb-2">¿Encontraste un problema?</p>
                  <a href="mailto:bugs@duomemo.app" className="text-[var(--primary)] hover:underline font-medium">
                    bugs@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--tertiary-light)] rounded-xl flex items-center justify-center text-2xl">
                  💡
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">Sugerencias</h3>
                  <p className="text-[var(--text-secondary)] mb-2">¿Tienes ideas para mejorar?</p>
                  <a href="mailto:ideas@duomemo.app" className="text-[var(--primary)] hover:underline font-medium">
                    ideas@duomemo.app
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-3xl p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Síguenos</h3>
              <p className="opacity-90 mb-4">Mantente al día con las últimas novedades</p>
              <div className="flex gap-4">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "Instagram", icon: "📷" },
                  { name: "TikTok", icon: "🎵" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[var(--bg-light)] rounded-3xl p-6 border border-[var(--border)]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[var(--success)] rounded-full animate-pulse"></div>
                <span className="text-[var(--text-secondary)]">
                  Tiempo de respuesta promedio: <strong className="text-[var(--text-primary)]">24 horas</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
