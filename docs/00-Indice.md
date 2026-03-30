# Base de Conocimientos y Documentación Oficial (Docs)

¡Bienvenido a la documentación técnica del Portafolio V1!

Esta sección unifica toda la información del proyecto en un solo lugar. Contiene tanto **guías prácticas de despliegue** como **exploraciones teóricas** sobre la arquitectura de software subyacente.

---

## 📌 Guías Prácticas (Configuración y Despliegue)

1. [**Primeros Pasos con Git a GitHub**](./06-Primeros-Pasos-Git.md)
   Instrucciones paso a paso para mandar tu portafolio al repositorio en la nube.
2. [**Guía de Despliegue (GitHub Pages)**](./07-Guia-Despliegue-GitHub-Pages.md)
   Configuraciones clave pre-despliegue en `astro.config.mjs` y auto-publicación con _GitHub Actions_.

---

## 🏗️ Teoría Web y Arquitectura (Wiki Interna)

> Si te interesa saber cómo funciona el software "debajo del capó" (Under the Hood), estos documentos revelan las decisiones de ingeniería de este desarrollo.

0. [**Resumen Arquitectónico (Express)**](./Resumen-Arquitectura.md)
   La visión general "a vuelo de pájaro" para entender el stack rápidamente.
1. [**Arquitectura Base y Teoría de Islas (Astro)**](./01-Arquitectura-Astro.md)
   Exploración conceptual del **Patrón SSG**, Zero-JS y la inyección parcial de interactividad.
2. [**Componentes y Separación de Responsabilidades**](./02-Componentes.md)
   Explicaciones sobre el flujo de props, estados y cuándo React toma el relevo de Astro.
3. [**Modelado Domiciliario de Datos**](./03-Gestion-de-Datos.md)
   El robusto patrón _Vista-Modelo_ empleando esquema de validaciones con `Zod` (en tiempo de Build).
4. [**Ingeniería de Estilos Visuales**](./04-Estilos-Tailwind.md)
   La potencia detrás del diseño _Utility-First_ y la compilación predictiva _Just-In-Time_ de Tailwind.
5. [**Despliegue y Teoría PWA**](./05-Despliegue-y-PWA.md)
   Bases del _Service Worker_, proxy en caché y el aglutinamiento ultrarrápido por bloque VITE.
