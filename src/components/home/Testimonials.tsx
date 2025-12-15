import Image from "next/image";

const testimonials = [
  {
    name: "María García",
    role: "Estudiante de Alemán",
    avatar: "👩‍🎓",
    content: "Los juegos son súper adictivos. He mejorado mi vocabulario en alemán sin darme cuenta. ¡El Memory es mi favorito!",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Carlos López",
    role: "Aprendiendo Inglés",
    avatar: "👨‍💻",
    content: "La función de conjugaciones de verbos es genial. Ya no tengo que buscar en otras apps, todo está aquí.",
    rating: 5,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Ana Martínez",
    role: "Profesora de Francés",
    avatar: "👩‍🏫",
    content: "Recomiendo DuoMemo a mis estudiantes. Las flashcards con animaciones hacen el repaso muy visual.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Diego Ruiz",
    role: "Viajero Frecuente",
    avatar: "🧳",
    content: "Perfecto para practicar en el metro. La racha diaria me mantiene motivado incluso cuando viajo.",
    rating: 5,
    gradient: "from-amber-500 to-orange-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-violet-100 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-200">
            💬 Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de personas ya están aprendiendo con DuoMemo. ¡Únete a la comunidad!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        {/* Stats Bar 
        <div className="mt-16 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Usuarios Activos" },
              { value: "500K+", label: "Palabras Guardadas" },
              { value: "1M+", label: "Juegos Completados" },
              { value: "4.8 ★", label: "Rating Promedio" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-sm sm:text-base opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
