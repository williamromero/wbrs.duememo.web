import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: "/#features", label: "Características" },
      { href: "/#screenshots", label: "Capturas" },
      { href: "#download", label: "Descargar" },
    ],
    support: [
      { href: "/faq", label: "Preguntas Frecuentes" },
      { href: "/contact", label: "Contacto" },
    ],
    legal: [
      { href: "/privacy", label: "Privacidad" },
      { href: "/terms", label: "Términos" },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/icon.png"
                alt="DuoMemo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-bold">DuoMemo</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Tu compañero perfecto para aprender idiomas jugando.
            </p>
            <div className="flex gap-3">
              {[
                { name: "Twitter", icon: "𝕏" },
                { name: "Instagram", icon: "📷" },
                { name: "TikTok", icon: "🎵" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Soporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DuoMemo. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm">
            Hecho con 💚 para amantes de los idiomas
          </p>
        </div>
      </div>
    </footer>
  );
}
