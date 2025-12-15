const features = [
  {
    icon: "📚",
    title: "Vocabulario Inteligente",
    description: "Guarda palabras, verbos con conjugaciones y oraciones con su traducción y pronunciación.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
  },
  {
    icon: "🎴",
    title: "Flashcards Interactivas",
    description: "Tarjetas con animación de volteo. Los verbos muestran todas sus conjugaciones.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50",
  },
  {
    icon: "🎮",
    title: "3 Juegos Divertidos",
    description: "Memory, Quiz de Velocidad y Ahorcado. Aprende mientras te diviertes.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50",
  },
  {
    icon: "🔥",
    title: "Rachas Motivadoras",
    description: "Mantén tu racha diaria y nunca pierdas la motivación de aprender.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50",
  },
  {
    icon: "📊",
    title: "Estadísticas Claras",
    description: "Visualiza tu progreso con porcentajes, sesiones completadas y más.",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/50 dark:to-rose-950/50",
  },
  {
    icon: "🌙",
    title: "Modo Oscuro",
    description: "Cuida tus ojos con un hermoso tema oscuro que puedes activar cuando quieras.",
    gradient: "from-slate-600 to-slate-800",
    bgGradient: "from-slate-100 to-gray-100 dark:from-slate-900/50 dark:to-gray-900/50",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-50 dark:opacity-30">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-100 dark:bg-emerald-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-violet-100 dark:bg-violet-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-violet-200 dark:border-violet-800">
            ✨ Características
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            DuoMemo combina las mejores técnicas de aprendizaje con gamificación para hacer el proceso divertido y efectivo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              <div
                className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
