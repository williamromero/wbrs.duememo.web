import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - DuoMemo",
  description: "Conoce cómo DuoMemo protege y maneja tu información personal.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl mb-6">
            <span className="text-3xl">🔒</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Política de Privacidad
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Última actualización: Diciembre 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="space-y-8">
            <Section title="1. Introducción">
              DuoMemo se compromete a proteger su privacidad. Esta política describe cómo recopilamos,
              usamos y protegemos su información personal cuando utiliza nuestra aplicación móvil.
            </Section>

            <Section title="2. Información que Recopilamos">
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li><strong>Información de cuenta:</strong> email, nombre de usuario</li>
                <li><strong>Datos de aprendizaje:</strong> palabras guardadas, progreso, estadísticas</li>
                <li><strong>Información del dispositivo:</strong> tipo de dispositivo, sistema operativo</li>
              </ul>
            </Section>

            <Section title="3. Cómo Usamos su Información">
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Personalizar su experiencia de aprendizaje</li>
                <li>Sincronizar su progreso entre dispositivos</li>
                <li>Enviar notificaciones de recordatorio (si está habilitado)</li>
              </ul>
            </Section>

            <Section title="4. Almacenamiento y Seguridad">
              Usamos Supabase como backend seguro. Los datos se almacenan en servidores con encriptación
              y las contraseñas se hashean usando algoritmos seguros.
            </Section>

            <Section title="5. Compartir Información">
              No vendemos ni compartimos su información personal con terceros, excepto cuando usted
              lo autorice o para cumplir con requisitos legales.
            </Section>

            <Section title="6. Sus Derechos">
              <ul className="list-disc list-inside space-y-2 mt-3 text-gray-600 dark:text-gray-300">
                <li>Acceder a sus datos personales</li>
                <li>Solicitar corrección de información incorrecta</li>
                <li>Eliminar su cuenta y datos asociados</li>
                <li>Exportar sus datos de vocabulario</li>
              </ul>
            </Section>

            <Section title="7. Contacto">
              Para consultas sobre privacidad:{" "}
              <a href="mailto:privacy@duomemo.app" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                privacy@duomemo.app
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
