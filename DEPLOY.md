# Guía de Despliegue

Aquí tienes las instrucciones para publicar tu portafolio en internet.

## Opción 1: Netlify (Recomendado - Más fácil)

Netlify es excelente porque detecta automáticamente proyectos de Astro y los configura.

### Método A: Conectar con GitHub (Automático)
1.  Sube tu código a un repositorio en GitHub.
2.  Ve a [netlify.com](https://www.netlify.com/) y regístrate/inicia sesión.
3.  Haz clic en **"Add new site"** > **"Import an existing project"**.
4.  Selecciona **GitHub** y busca tu repositorio `portfolio_v1`.
5.  Netlify detectará que es un proyecto Astro.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
6.  Haz clic en **"Deploy site"**.
7.  ¡Listo! Tu sitio estará en línea en unos segundos.

### Método B: Drag & Drop (Manual)
1.  En tu terminal, ejecuta: `npm run build`.
2.  Esto creará una carpeta `dist/` en tu proyecto.
3.  Ve a [netlify.com/drop](https://app.netlify.com/drop).
4.  Arrastra la carpeta `dist/` al área indicada.
5.  Tu sitio se subirá y publicará instantáneamente.

---

## Opción 2: GitHub Pages

Para alojar tu sitio en GitHub Pages, necesitas configurar una "Acción" de GitHub.

1.  Sube tu código a un repositorio en GitHub.
2.  En tu repositorio, ve a la pestaña **Settings** > **Pages**.
3.  En **Source**, selecciona **GitHub Actions**.
4.  GitHub sugerirá "Astro". Haz clic en **Configure**.
5.  Se abrirá un editor con un archivo `.yml`. Simplemente haz clic en **Commit changes**.
6.  Espera unos minutos y tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo/`.

**Nota Importante para GitHub Pages:**
Si tu sitio no se ve bien (faltan estilos o imágenes), es posible que necesites configurar la propiedad `site` y `base` en `astro.config.mjs`:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/nombre-repo', // Solo si tu repo no es tu-usuario.github.io
  // ... resto de la config
});
```
