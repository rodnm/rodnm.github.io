# Portfolio Personal V1

Un portafolio web profesional, diseñado para **Desarrolladores**, **Científicos de Datos** y **Profesionales Técnicos**. Construido con **Astro**, **Tailwind CSS** y **React**, ofrece un rendimiento excepcional y una estética moderna basada en la paleta de colores **Viridis**.

![Portfolio Preview](/public/images/portfolio-v1.png)

## 🚀 Características

-   **⚡ Rendimiento Extremo**: Carga instantánea gracias a la arquitectura de islas de Astro.
-   **🎨 Diseño Premium**: Estética minimalista y profesional con Tailwind CSS v4.
-   **🌙 Modo Oscuro Inteligente**: Preferencia de sistema automática y toggle manual persistente.
-   **📱 Diseño Responsivo**: Adaptación perfecta a móviles, tablets y escritorio.
-   **🛠️ Configuración Centralizada**: Gestiona todo el contenido (textos, proyectos, experiencia) desde `src/config.ts`.
-   **🖼️ Media Rich**: Soporte optimizado para imágenes de proyectos y perfil.
-   **🎓 Sección Académica**: Área dedicada para formación y certificaciones.
-   **📄 CV Integrado**: Botón de descarga directa para tu hoja de vida.

## 🛠️ Tecnologías

-   [Astro](https://astro.build/) - El framework web para sitios orientados a contenido.
-   [Tailwind CSS](https://tailwindcss.com/) - Framework de utilidades para diseño rápido.
-   [React](https://reactjs.org/) - Para componentes interactivos complejos.
-   [Lucide React](https://lucide.dev/) - Iconografía moderna y ligera.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando           | Acción                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Instala las dependencias                         |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/`  |
| `npm run preview` | Vista previa de la build localmente              |

## 🚀 Despliegue

Para publicar tu portafolio en internet (Netlify, GitHub Pages, Vercel), consulta nuestra guía detallada:

👉 **[Guía de Despliegue (DEPLOY.md)](DEPLOY.md)**

## ⚙️ Personalización

### 1. Editar Contenido
Todo el texto y los datos del portafolio se gestionan en `src/config.ts`. Edita este archivo para actualizar:
-   Información personal (Nombre, Título, Descripción)
-   Enlaces de contacto (Email, GitHub, LinkedIn)
-   Experiencia laboral
-   Educación
-   Proyectos

### 2. Imágenes y Archivos
Para personalizar las imágenes y archivos, coloca tus archivos en la carpeta `public/`:

-   **Foto de Perfil**: Guarda tu foto como `public/images/profile.jpg` (o actualiza la ruta en `src/config.ts`).
-   **CV**: Guarda tu CV como `public/cv.pdf` (o actualiza la ruta en `src/config.ts`).
-   **Imágenes de Proyectos**: Guarda las imágenes en `public/images/` y actualiza las rutas en la sección `projects` de `src/config.ts`.

## 📂 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos (imágenes, cv, favicon)
├── src/
│   ├── components/     # Componentes reutilizables (ThemeToggle, etc.)
│   ├── layouts/        # Layout principal (Layout.astro)
│   ├── pages/          # Páginas del sitio (index.astro)
│   ├── styles/         # Estilos globales (global.css)
│   └── config.ts       # Archivo de configuración de contenido
└── package.json
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.
