# 🎯 Prompt para Landing Page de DuoMemo

## Descripción General del Proyecto

Crea una **landing page moderna, atractiva y juvenil** para **DuoMemo**, una aplicación móvil de aprendizaje de idiomas estilo Duolingo. La página debe construirse en **Next.js** con un diseño vibrante que transmita energía, diversión y efectividad en el aprendizaje.

---

## 🎨 Paleta de Colores (Obligatoria)

Utiliza esta paleta de colores inspirada en Duolingo para mantener consistencia con la app:

| Color | Hex | Uso |
|-------|-----|-----|
| **Verde Vibrante (Primary)** | `#10b981` | Acciones principales, éxito, CTA buttons |
| **Verde Oscuro** | `#059669` | Hover states, acentos |
| **Verde Claro** | `#d1fae5` | Backgrounds suaves, badges |
| **Violeta (Secondary)** | `#a78bfa` | Acciones secundarias, repaso |
| **Violeta Oscuro** | `#7c3aed` | Hover states |
| **Ámbar (Tertiary)** | `#fbbf24` | Gamificación, rachas, streaks |
| **Ámbar Oscuro** | `#d97706` | Destacados importantes |
| **Azul Acento** | `#1fa7e1` | Info, links, quiz |
| **Fondo Claro** | `#f5f6f8` | Background principal |
| **Fondo Oscuro** | `#0f172a` | Dark mode background |
| **Texto Primario** | `#1f2937` | Títulos y texto principal |
| **Texto Secundario** | `#6b7280` | Subtítulos y descripciones |

---

## 🏠 Estructura de Páginas

### 1. **Página Principal (Home)**
- **Hero Section**
  - Título principal grande y llamativo: "Aprende idiomas jugando"
  - Subtítulo: "DuoMemo: Tu compañero perfecto para memorizar vocabulario con tarjetas, juegos y más"
  - Botones CTA: "Descargar Gratis" (App Store + Google Play)
  - Mockup del teléfono mostrando la app (usar screenshots proporcionados)
  - Animación de gradiente de fondo con los colores primary y secondary

- **Features Section**
  | Feature | Ícono | Descripción |
  |---------|-------|-------------|
  | 📚 Vocabulario Inteligente | book | Guarda palabras, verbos y oraciones con traducción y pronunciación |
  | 🎴 Flashcards Interactivas | cards | Repasa con tarjetas que giran y muestra conjugaciones verbales |
  | 🎮 Juegos Divertidos | gamepad | Memory, Quiz de Velocidad y Ahorcado para practicar jugando |
  | 🔥 Rachas de Aprendizaje | flame | Mantén tu racha diaria y sigue tu progreso |
  | 📊 Estadísticas Detalladas | chart | Visualiza tu progreso con gráficos y métricas |
  | 👥 Conecta con Amigos | people | Compite y aprende junto a tus amigos |

- **App Screenshots Carousel**
  - Carrusel interactivo con las screenshots de la app
  - Efecto de hover que agranda la imagen
  - Indicadores de navegación con dots animados

- **Testimonials Section**
  - Cards con testimonios de usuarios ficticios
  - Avatares coloridos
  - Ratings con estrellas

- **Download CTA Section**
  - Banner con gradiente llamativo
  - Iconos de App Store y Google Play
  - QR code para descarga rápida

- **Footer**
  - Links a páginas secundarias
  - Redes sociales
  - Copyright

### 2. **Página de Política de Privacidad** (`/privacy`)

```markdown
# Política de Privacidad de DuoMemo

**Última actualización:** [Fecha actual]

## 1. Introducción
DuoMemo ("nosotros", "nuestro" o "la aplicación") se compromete a proteger su privacidad...

## 2. Información que Recopilamos
- **Información de cuenta:** email, nombre de usuario, contraseña encriptada
- **Datos de aprendizaje:** palabras guardadas, progreso, estadísticas de juego
- **Información del dispositivo:** tipo de dispositivo, sistema operativo, identificadores únicos
- **Datos de uso:** frecuencia de uso, funciones utilizadas, tiempo en la app

## 3. Cómo Usamos su Información
- Proporcionar y mejorar nuestros servicios
- Personalizar su experiencia de aprendizaje
- Sincronizar su progreso entre dispositivos
- Enviar notificaciones de recordatorio (si está habilitado)
- Analizar patrones de uso para mejorar la app

## 4. Almacenamiento y Seguridad
- Usamos Supabase como backend seguro
- Los datos se almacenan en servidores con encriptación
- Las contraseñas se hashean usando algoritmos seguros
- Implementamos autenticación de dos factores opcional

## 5. Compartir Información
No vendemos ni compartimos su información personal con terceros, excepto:
- Cuando usted lo autorice expresamente
- Para cumplir con requisitos legales
- Con proveedores de servicios bajo acuerdos de confidencialidad

## 6. Sus Derechos
- Acceder a sus datos personales
- Solicitar corrección de información incorrecta
- Eliminar su cuenta y datos asociados
- Exportar sus datos de vocabulario
- Optar por no recibir comunicaciones

## 7. Retención de Datos
Conservamos sus datos mientras su cuenta esté activa. Al eliminar su cuenta, los datos se borran en un plazo de 30 días.

## 8. Menores de Edad
DuoMemo es apto para todas las edades. Los menores de 13 años requieren consentimiento parental.

## 9. Cambios a esta Política
Notificaremos cambios significativos por email o mediante la app.

## 10. Contacto
Para consultas sobre privacidad: privacy@duomemo.app
```

### 3. **Página de FAQ** (`/faq`)

**Diseño:** Acordeón interactivo con animaciones suaves

**Categorías y Preguntas:**

#### 🚀 Comenzando
- **¿Cómo empiezo a usar DuoMemo?**
  Descarga la app, crea una cuenta gratuita y comienza agregando tus primeras palabras. ¡Puedes empezar sin registrarte como invitado!

- **¿DuoMemo es gratis?**
  ¡Sí! DuoMemo es completamente gratis con todas las funciones disponibles.

- **¿Necesito conexión a internet?**
  Necesitas internet para sincronizar tu progreso, pero puedes estudiar offline con tus palabras ya guardadas.

#### 📚 Vocabulario
- **¿Qué tipo de contenido puedo guardar?**
  Palabras individuales, verbos con sus conjugaciones (infinitivo, presente, pasado, futuro), y oraciones completas.

- **¿Puedo importar mi vocabulario?**
  Actualmente puedes agregar palabras manualmente. La importación masiva está en desarrollo.

- **¿Cómo funciona la pronunciación?**
  Puedes agregar la pronunciación fonética de cada palabra para recordar cómo se dice.

#### 🎮 Juegos
- **¿Qué juegos están disponibles?**
  - **Juego de Memoria:** Encuentra pares de palabras y traducciones
  - **Quiz de Velocidad:** Responde correctamente antes que se acabe el tiempo
  - **Ahorcado:** Adivina la palabra letra por letra

- **¿Cuántas palabras necesito para jugar?**
  Necesitas al menos 4 palabras para Memory y Speed Quiz, y 1 palabra para Ahorcado.

- **¿Los juegos tienen niveles de dificultad?**
  ¡Sí! Memory tiene tres niveles: Fácil (12 tarjetas), Medio (20 tarjetas), Difícil (30 tarjetas).

#### 🎴 Flashcards
- **¿Cómo funcionan las tarjetas de repaso?**
  Las tarjetas muestran la palabra y al tocar, giran para revelar la traducción. Puedes marcar si la sabías o no.

- **¿Se muestran las conjugaciones de verbos?**
  ¡Sí! Al voltear una tarjeta de verbo, verás todas sus conjugaciones (infinitivo, presente, pasado, futuro).

#### 📊 Progreso
- **¿Cómo funcionan las rachas?**
  Cada día que practicas se suma a tu racha. ¡Mantén la racha para mejorar tu consistencia!

- **¿Puedo ver mis estadísticas?**
  En tu perfil verás: palabras guardadas, días de racha, sesiones completadas, precisión promedio.

#### 🔧 Cuenta y Configuración
- **¿Puedo cambiar entre modo claro y oscuro?**
  ¡Sí! Ve a Configuración > Tema y elige entre Light, Dark o Automático.

- **¿Cómo elimino mi cuenta?**
  Ve a Configuración > Cuenta > Eliminar cuenta. Tus datos se borrarán en 30 días.

### 4. **Página de Términos de Servicio** (`/terms`)

Contenido estándar de términos incluyendo:
- Aceptación de términos
- Uso permitido
- Propiedad intelectual
- Limitación de responsabilidad
- Modificaciones al servicio

### 5. **Página de Contacto** (`/contact`)

Formulario simple con:
- Nombre
- Email
- Tipo de consulta (dropdown)
- Mensaje
- Botón de envío con animación

---

## 🎬 Características de Diseño

### Animaciones y Microinteracciones
- **Scroll animations** con fade-in suave
- **Hover effects** en botones y cards
- **Parallax** sutil en el hero
- **Floating elements** decorativos
- **Gradient animations** en backgrounds
- **Flip animation** para mostrar features (similar a las flashcards de la app)

### Elementos Visuales
- **Glassmorphism** en cards y modales
- **Neumorphism** sutil en botones
- **Smooth gradients** usando los colores de la paleta
- **Custom illustrations** o usar Lottie animations temáticas de educación
- **Device frames** para mostrar screenshots de la app

### Tipografía
- **Títulos:** Inter o Outfit (bold, moderno)
- **Cuerpo:** Inter (legible, limpio)
- **Tamaños responsivos** que escalen bien en móvil

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Menú hamburguesa en móvil con animación suave

---

## 📱 Screenshots de la App a Incluir

Las siguientes screenshots están disponibles y deben mostrarse en un carrusel o galería:

1. **01-login.png** - Pantalla de bienvenida/login
2. **02-home.png** - Pantalla principal con lista de palabras
3. **02-home-ipad.png** - Versión iPad
4. **03-addword.png** - Agregar nueva palabra
5. **04-games.png** - Hub de juegos
6. **05-perfil.png** - Pantalla de perfil con estadísticas
7. **06-cards.png** - Flashcards en acción

---

## 🔧 Especificaciones Técnicas

```
Framework: Next.js 14+ (App Router)
Styling: CSS Modules o Tailwind CSS
Animations: Framer Motion
Icons: Lucide React o Heroicons
Font: Google Fonts (Inter, Outfit)
Hosting: Vercel
```

### Estructura de Archivos Sugerida
```
app/
├── page.tsx          # Home
├── privacy/
│   └── page.tsx      # Política de privacidad
├── faq/
│   └── page.tsx      # Preguntas frecuentes
├── terms/
│   └── page.tsx      # Términos de servicio
├── contact/
│   └── page.tsx      # Contacto
├── layout.tsx        # Layout con navbar y footer
└── globals.css       # Estilos globales

components/
├── Navbar.tsx
├── Footer.tsx
├── Hero.tsx
├── Features.tsx
├── Screenshots.tsx
├── Testimonials.tsx
├── DownloadCTA.tsx
└── FAQ/
    └── Accordion.tsx
```

---

## ✨ Características Adicionales Recomendadas

1. **SEO optimizado** con meta tags dinámicos
2. **Schema markup** para mejor indexación
3. **Open Graph images** para redes sociales
4. **Performance:** Lazy loading de imágenes
5. **Accesibilidad:** ARIA labels, contraste adecuado
6. **Internacionalización:** Preparar para múltiples idiomas
7. **Analytics:** Configurar Google Analytics o Plausible
8. **Cookie consent** popup

---

## 🎯 Tono y Voz

- **Juvenil y energético** - Usa emojis moderadamente 🎉
- **Motivador** - "¡Tú puedes!", "Aprende jugando"
- **Amigable** - Tutea al usuario
- **Simple** - Evita jerga técnica
- **Divertido** - Refleja la naturaleza gamificada de la app

---

## Ejemplo de Textos

### Hero
> **Aprende idiomas como si fuera un juego** 🎮
> 
> Memoriza vocabulario con flashcards interactivas, juegos adictivos y un sistema de rachas que te mantiene motivado.
>
> [⬇️ Descargar para iOS] [⬇️ Descargar para Android]

### Feature destacada
> **🎴 Flashcards que enamoran**
> 
> Toca, gira, aprende. Nuestras tarjetas interactivas hacen que memorizar sea natural. ¿Es un verbo? Te mostramos todas sus conjugaciones en un solo vistazo.

### CTA Final
> **¿Listo para empezar tu aventura?**
> 
> Únete a miles de estudiantes que ya están aprendiendo con DuoMemo. Es gratis, es divertido, ¡y funciona!

---

## Logo y Branding

Usa el logo de DuoMemo disponible en:
- `assets/icon.png` - Ícono principal
- `assets/logo-transparent.png` - Logo con transparencia

Los colores del logo son consistentes con la paleta de verde vibrante (#10b981).

---

**¡Crea una landing page que transmita la misma energía y diversión que la app!** 🚀
