# Arquitectura Técnica y Funcionamiento del Portafolio V1

Este documento profundiza en la arquitectura de software, stack tecnológico y patrones de diseño utilizados en el desarrollo de este portafolio web. Está diseñado para ofrecer una comprensión clara del funcionamiento "bajo el capó" (under the hood) del proyecto, detallando cómo interactúan sus tecnologías principales.

---

## 1. Patrón Arquitectónico: Generación de Sitios Estáticos (SSG) y Archipiélago ("Islands Architecture")

El corazón del proyecto es **Astro** (v5). A diferencia de las Single Page Applications (SPAs) tradicionales construidas puramente con React, Angular o Vue (las cuales envían bundles grandes de JavaScript al cliente para renderizar la interfaz), este proyecto utiliza un enfoque **SSG (Static Site Generation)** con **Hidratación Parcial**.

### ¿Cómo funciona la arquitectura de Islas?

- **Server-First Templating:** Cuando ejecutamos `npm run build`, Astro ejecuta todo el TypeScript y JavaScript del proyecto **en el servidor (en tiempo de compilación)**.
- **Salida como HTML Puro:** Todo el contenido estático de las páginas (como tu experiencia, proyectos, y descripciones) se convierte a HTML y CSS puro ("Zero JS default"). Esto garantiza tiempos de carga extremadamente rápidos (LCP - Largest Contentful Paint mínimo) y un SEO perfecto, ya que los motores de búsqueda pueden leer el documento completo de inmediato.
- **Las Islas (Hidratación Parcial):** Si un componente necesita interactividad del lado del cliente (por ejemplo, el `<ToggleTheme />` en React que maneja el modo oscuro), Astro lo inyecta como una "Isla" separada. Esto significa que el navegador solo descargará e hidratará el código JavaScript estrictamente necesario para ese pequeño widget o botón, ignorando el resto del DOM estático.

---

## 2. Gestión Dual de Modelos de Datos (`src/config.ts`)

La filosofía del proyecto separa estrictamente los Datos (`Model`) de la Interfaz (`View`). Toda la lógica de "base de datos en memoria" está centralizada en `src/config.ts`.

### Esquematización y Validación con Zod

En lugar de depender de objetos JSON frágiles o variables sueltas, hemos definido "contratos estructurados" usando la biblioteca **Zod**.

- Hay esquemas definidos como `PortfolioDataSchema`, que obligan matemáticamente a que los datos ingresados tengan tipos estrictos (ej. `email: z.string().email()`, `link: z.string().url()`).
- Si en el futuro ingresas un enlace roto o un tipo de dato equivocado en `spanishData`, la validación de Zod fallará directamente durante la fase de Build (`PortfolioDataSchema.parse(spanishData)`), impidiendo que se publique una página rota al entorno de producción.

### Internacionalización Estática (i18n)

La internacionalización (Soporte Bilingüe Español / Inglés) no depende de cargar un archivo `.json` sobre la marcha y traducirlo dinámicamente con JavaScript en el navegador del usuario (lo que sería costoso en rendimiento).

- Astro inyecta `currentLocale="es"` o `currentLocale="en"` como una constante ("prop") a los componentes en tiempo de Build.
- Se compilan físicamente dos rutas estáticas separadas: `/` para la data inyectada a partir de `spanishData` y `/en/` o similar para `englishData`. Cada página final en HTML tiene los textos "codificados de fábrica" en su idioma respectivo.

---

## 3. Integración de Frameworks de UI (Astro + React)

Astro funciona como el enrutador principal y la base del diseño visual (los archivos `.astro`).

- **La sintaxis de Astro** se divide en dos: El "Frontmatter" (encapsulado entre `---`), que es **código de servidor que nunca se envía al cliente**. Aquí importamos los layouts y procesamos la data de `config.ts`. Debajo del bloque, tenemos el templating JSX-like para dibujar el HTML.
- **Componentes React:** Usamos React (v19) y Lucide-React exclusivamente para componentes de estado complejo o interactividad (como alertas, modales o los iconos que reaccionan a eventos `onClick`). Astro monta internamente React a través de la integración `@astrojs/react`.

---

## 4. Motor de Diseño y Renderizado CSS: Tailwind CSS

Este proyecto implementa **Tailwind CSS (v4)** a través de integración directa con Vite (el bundler subyacente de Astro).

- **Utility-First:** En lugar de crear hojas de estilo enormes usando el patrón BEM o CSS Modules, la UI se construye declarativamente inyectando clases atómicas directamente sobre el marcado (`flex`, `items-center`, `text-slate-800`).
- **JIT Compiler (Just-in-Time):** Durante el desarrollo (`npm run dev`) o el empaquetado (`npm run build`), el compilador escanea todo el código fuente del proyecto (`src/**/*.astro`, `src/**/*.tsx`), identifica qué clases de Tailwind se están utilizando y genera un único archivo `.css` final que contiene exclusivamente las reglas utilizadas. No existe código CSS residual.
- **Modo Oscuro Inteligente:** A través de la clase `dark:` en los componentes Tailwind y un pequeño script inyectado en el `<head>`, el sitio evalúa la preferencia del sistema operativo (`prefers-color-scheme: dark`) antes de pintar el primer frame de la página para evitar "Flash of unstyled content (FOUC)".

---

## 5. Ecosistema Adicional: Vite, PWA y CI/CD

- **El Motor Vite:** Astro usa debajo del capó **Vite**, un empaquetador ultrarrápido que reemplaza a Webpack. Este motor minimiza imágenes (`ImageMetadata`), reemplaza variables, y empaqueta el JavaScript en "Chunks" minificadas.
- **PWA (Progressive Web App):** Gracias a `vite-plugin-pwa` y `workbox-window`, el navegador guarda componentes del sitio en un caché en segundo plano («Service Workers»). Esto permite que el sitio pueda cargar instantáneamente sin internet en visitas subsecuentes e incluso se pueda "Instalar" como aplicación de escritorio/móvil.
- **Control de Calidad (Linting & Testing):** Husky, Prettier, ESLint, Playwright (tests e2e) y Vitest forman un pipeline automatizado de control; si el código no sigue las reglas semánticas, o rompe las pruebas de Playwright, los "git hooks" (`lint-staged`) bloquearán la escritura en el repositorio.

---

### Resumen del Flujo de Procesamiento Real:

**1. Comando:** Usuario ejecuta `npm run build`.
**2. Data Parsing:** Zod verifica estructuralmente los diccionarios en `src/config.ts`.
**3. SSR Rendering (Local):** Node.js lee cada ruta `.astro`, interpola los diccionarios, y genera el HTML en memoria.
**4. CSS Extraction:** Tailwind extrae solo las clases usadas y compila un stylesheet `.css` altamente comprimido.
**5. JS Bundling:** Las partes React (las "Islas") se agrupan en minúsculos archivos `.js` con Vite.
**6. Image Optimization:** Las imágenes en `src/assets` se redimensionan, se convierten al formato `webp` y se guardan junto al código.
**7. Output:** El resultado final se escupe en la carpeta `dist/`, la cual contiene puros archivos de lectura rápidos estáticos para servidores CDN globales sin necesidad de configurar bases de datos ni servidores backend.
