import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio - DuoMemo",
  description: "Lee los términos y condiciones de uso de DuoMemo.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/50 rounded-2xl mb-6">
            <span className="text-3xl">📋</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Términos de Servicio
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Última actualización: Diciembre 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="space-y-8">
            <Section title="1. Aceptación de los Términos">
              Al descargar o utilizar DuoMemo, usted acepta estos Términos de Servicio.
              Si no está de acuerdo, no utilice la aplicación.
            </Section>

            <Section title="2. Descripción del Servicio">
              DuoMemo es una aplicación de aprendizaje de idiomas que permite guardar vocabulario,
              practicar con flashcards y juegos, y realizar seguimiento de su progreso.
            </Section>

            <Section title="3. Cuenta de Usuario">
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li>Mantener la confidencialidad de su contraseña</li>
                <li>Es responsable de todas las actividades bajo su cuenta</li>
                <li>Notificarnos de cualquier uso no autorizado</li>
              </ul>
            </Section>

            <Section title="4. Uso Permitido">
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li>No usar la app para fines ilegales</li>
                <li>No intentar acceder a sistemas sin autorización</li>
                <li>No interferir con el funcionamiento del servicio</li>
              </ul>
            </Section>

            <Section title="5. Contenido del Usuario">
              El vocabulario que usted agrega es de su propiedad. Nos otorga licencia para
              almacenarlo y procesarlo para proporcionarle el servicio.
            </Section>

            <Section title="6. Propiedad Intelectual">
              DuoMemo y todo su contenido están protegidos por leyes de derechos de autor
              y propiedad intelectual.
            </Section>

            <Section title="7. Modificaciones">
              Nos reservamos el derecho de modificar estos términos. Los cambios entrarán
              en vigor después de su publicación en la aplicación.
            </Section>

            <Section title="8. Contacto">
              Para consultas sobre estos términos:{" "}
              <a href="mailto:legal@duomemo.app" className="text-amber-600 dark:text-amber-400 hover:underline font-medium">
                legal@duomemo.app
              </a>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}
