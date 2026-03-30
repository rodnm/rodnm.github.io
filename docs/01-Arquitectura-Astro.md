# Arquitectura Core: Astro y el Patrón de Islas

El núcleo de este portafolio está construido sobre **Astro**, un framework web optimizado para sitios orientados a contenido estático. Su enfoque principal es entregar la menor cantidad posible de JavaScript al cliente.

## 1. El Paradigma SSG (Static Site Generation)

A diferencia de las Aplicaciones de Página Única (SPAs) hechas puramente en React, que requieren procesarse en el navegador (`Client-Side Rendering`), este portafolio funciona mediante **SSG**:

1. **Build Time (Tiempo de Compilación):** Al ejecutar `npm run build`, Astro ejecuta todo el TypeScript de `src/`, evalúa la estructura de la página, interpolando los datos desde `config.ts`, y escribe el resultado directo.
2. **HTML Estático:** El resultado final (`dist/`) son archivos `.html` crudos.
3. **Ventajas Teóricas:**
    - **Performance:** El First Contentful Paint (FCP) y el Time to Interactive (TTI) se reducen drásticamente porque el navegador sólo descarga y renderiza HTML y CSS (que son instantáneos) antes de evaluar cualquier JavaScript.
    - **SEO Excelente:** Los motores de búsqueda indexan el contenido sin tener que renderizar JS.

## 2. Arquitectura de Islas ("Islands Architecture")

Astro introduce un paradigma híbrido conocido como la "Arquitectura de Islas":

Imaginemos el sitio como un mar (el HTML estático). En ese mar flotan ciertas "Islas de Interactividad" (componentes de React o Svelte).

En el portafolio:

- Todo el layout, los textos de tu experiencia y los encabezados son **océano estático** (Componentes `.astro` que rinden su HTML sin enviar JS al cliente).
- El botón de "Modo Oscuro" (`ToggleTheme.tsx`) es una **Isla de interactividad**.

Astro permite hidratar (_hidratación_ es el proceso donde React "posee" un pedazo del HTML existente en el navegador y le añade listeners de eventos) de manera granular:

```astro
<!-- Esto nunca envía React.js al navegador -->
<Hero data={personalInfo} />

<!-- Esto envía sólo el JS necesario para el botón en cuanto se carga -->
<ToggleTheme client:load />

<!-- Esto hidrata el componente SÓLO cuando el usuario hace scroll hacia él -->
<ImageCarousel client:visible />
```

Esta directiva `client:*` es la teoría clave de Astro para reducir el tamaño final de los archivos JS, haciendo que el portafolio cargue exponencialmente más veloz que si estuviera construido bajo la teoría clásica de React SPA.
