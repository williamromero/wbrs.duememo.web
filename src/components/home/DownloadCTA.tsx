import Image from "next/image";

export function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-200 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-violet-500/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/icon.png"
                alt="DuoMemo"
                width={80}
                height={80}
                className="rounded-2xl shadow-lg"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              ¿Listo para empezar?
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
              Únete a miles de estudiantes que ya están aprendiendo con DuoMemo. Es gratis, es divertido, ¡y funciona!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#"
                className="group flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Descargar en</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible en</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                Sin anuncios
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                100% Gratis
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                iOS y Android
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
