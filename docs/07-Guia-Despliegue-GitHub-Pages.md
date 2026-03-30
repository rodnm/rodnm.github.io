# Guía de Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages utilizando GitHub Actions.

## Tipos de Despliegue

GitHub Pages ofrece dos formas de desplegar tu sitio, y la configuración cambia ligeramente dependiendo de cuál elijas.

### 1. User Site (Recomendado)

Tu sitio estará en la raíz de tu dominio de usuario: `https://usuario.github.io`.

**Requisitos:**

- El repositorio debe llamarse **exactamente** `usuario.github.io`.
- En `astro.config.mjs`, la configuración debe ser:
    ```javascript
    export default defineConfig({
        site: 'https://usuario.github.io',
        // No se necesita 'base' o se puede dejar en '/'
    });
    ```

### 2. Project Site

Tu sitio estará en una subcarpeta: `https://usuario.github.io/nombre-repo/`.

**Requisitos:**

- El repositorio puede tener cualquier nombre (ej: `portfolio_v1`).
- En `astro.config.mjs`, debes configurar `base` con el nombre del repositorio:
    ```javascript
    export default defineConfig({
        site: 'https://usuario.github.io',
        base: '/nombre-repo', // Ejemplo: '/portfolio_v1'
    });
    ```

## Configuración Actual

Actualmente, el proyecto está configurado como **User Site** (`https://rodnm.github.io`).

- **Repositorio:** `rodnm.github.io`
- **Configuración:** Sin `base` path (raíz).

## Cómo Desplegar

1. **Push a la rama `main`:**
   Cada vez que hagas un push a la rama `main`, GitHub Actions construirá y desplegará el sitio automáticamente.

    ```bash
    git add .
    git commit -m "feat: nuevo cambio"
    git push origin main
    ```

2. **Verificar el estado:**
   Puedes ver el progreso del despliegue en la pestaña **Actions** de tu repositorio en GitHub.

3. **Configuración en GitHub:**
   Asegúrate de que en **Settings > Pages** de tu repositorio, la fuente esté configurada como **GitHub Actions**.

## Solución de Problemas

- **Estilos no cargan (Página en blanco o solo HTML):**
  Esto suele ocurrir si la configuración `base` en `astro.config.mjs` no coincide con la URL de tu repositorio.
    - Si tu URL es `usuario.github.io/repo`, necesitas `base: '/repo'`.
    - Si tu URL es `usuario.github.io`, NO necesitas `base`.

- **Error 404 en rutas:**
  Asegúrate de que el archivo `public/.nojekyll` exista. Esto evita que GitHub Pages ignore archivos que comienzan con `_` (como `_astro`).
