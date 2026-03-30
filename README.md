# Portfolio Personal V1

Un portafolio web profesional, diseñado para **Desarrolladores**, **Científicos de Datos** y **Profesionales Técnicos**. Construido con **Astro**, **Tailwind CSS** y **React**, ofrece un rendimiento excepcional y una estética moderna basada en la paleta de colores **Viridis**.

![Portfolio Preview](src/assets/images/portfolio-v1.png)

## 🚀 Características

- **⚡ Rendimiento Extremo**: Carga instantánea gracias a la arquitectura de islas de Astro.
- **🎨 Diseño Premium**: Estética minimalista y profesional con Tailwind CSS v4.
- **🌙 Modo Oscuro Inteligente**: Preferencia de sistema automática y toggle manual persistente.
- **📱 Diseño Responsivo**: Adaptación perfecta a móviles, tablets y escritorio.
- **🌐 Multi-idioma**: Soporte nativo para Español e Inglés con detección automática.
- **🛠️ Configuración Centralizada**: Gestiona todo el contenido desde `src/config.ts` con validación de tipos (Zod).
- **🖼️ Media Rich**: Soporte optimizado para imágenes de proyectos y perfil.
- **📊 Analytics & SEO**: Integración con Google Analytics 4 y metaetiquetas optimizadas.
- **📱 PWA**: Instalable como aplicación nativa y soporte offline.
- **♿ Accesible**: Cumplimiento WCAG 2.1 AA, navegación por teclado y soporte para lectores de pantalla.

## 🛠️ Tecnologías

- **Core**: [Astro](https://astro.build/) v5
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI**: [React](https://reactjs.org/) v19
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Calidad**: ESLint 9, Prettier, Husky, lint-staged
- **Testing**: Vitest (Unit), Playwright (E2E)
- **PWA**: Vite PWA Plugin

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando            | Acción                                               |
| :----------------- | :--------------------------------------------------- |
| `npm install`      | Instala las dependencias                             |
| `npm run dev`      | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`    | Construye el sitio para producción en `./dist/`      |
| `npm run preview`  | Vista previa de la build localmente                  |
| `npm run lint`     | Ejecuta el linter (ESLint)                           |
| `npm run format`   | Formatea el código (Prettier)                        |
| `npm run test`     | Ejecuta tests unitarios (Vitest)                     |
| `npm run test:e2e` | Ejecuta tests end-to-end (Playwright)                |

## 📚 Documentación y Wiki

Toda la ayuda técnica, **guías de despliegue (GitHub Pages)** y la **Wiki con Arquitectura** detallada del proyecto han sido consolidadas en el directorio `docs/`.

👉 **[Leer la Documentación Completa](./docs/00-Indice.md)**

## ⚙️ Personalización

### 1. Editar Contenido

Todo el texto y los datos del portafolio se gestionan en `src/config.ts`. Edita este archivo para actualizar:

- Información personal (Nombre, Título, Descripción)
- Enlaces de contacto (Email, GitHub, LinkedIn)
- Experiencia laboral
- Educación
- Proyectos
- Habilidades

> **Nota**: `src/config.ts` utiliza **Zod** para validar que los datos sean correctos. Si cometes un error de tipo, verás una alerta en la consola.

### 2. Imágenes y Archivos

Para personalizar las imágenes y archivos, coloca tus archivos en la carpeta `src/assets/images/` (recomendado para optimización) o `public/`:

- **Foto de Perfil**: Actualiza la importación en `src/config.ts`.
- **CV**: Guarda tu CV como `public/cv.pdf`.

### 3. Formulario de Contacto

El formulario utiliza **Formspree** para enviar correos. Para configurarlo:

1. Crea una cuenta gratuita en [Formspree](https://formspree.io/).
2. Crea un nuevo formulario ("New Form").
3. Copia el **Form ID** (el código al final de la URL, ej: `f/xpzq...`).
4. Abre `src/components/Portfolio.astro` y busca el componente `<ContactForm />`.
5. Reemplaza el valor de `formId` con tu propio ID.

## 📂 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos públicos (cv, robots.txt)
├── src/
│   ├── assets/         # Imágenes optimizadas
│   ├── components/     # Componentes reutilizables (React & Astro)
│   ├── content/        # Colecciones de contenido (Blog)
│   ├── layouts/        # Layout principal (Layout.astro)
│   ├── pages/          # Rutas del sitio (index.astro, blog/, 404.astro)
│   ├── styles/         # Estilos globales
│   ├── test/           # Configuración de tests
│   ├── config.ts       # Configuración y datos del portafolio
│   └── env.d.ts        # Definiciones de tipos globales
├── e2e/                # Tests End-to-End (Playwright)
└── package.json
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.
