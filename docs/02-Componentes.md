# Sistema de Componentes y Separación de Responsabilidades

El software moderno para web está fundamentado en el "Desarrollo basado en Componentes". Un componente es un bloque modular de la Interfaz de Usuario (UI) aislado semánticamente, que puede alojar su propia lógica, estilo y marcado.

## 1. La Diferencia Crítica: `.astro` vs `.tsx` (React)

En nuestro portafolio utilizamos dos tipos distintos de componentes conviviendo armónicamente, cada uno con un caso de uso teórico estricto:

### Componentes de Astro (`.astro`)

- **Teoría de Uso:** Usados para estructuras `Sin Estado (Stateless)` y presentacionales.
- **Funcionamiento Interno:** Funcionan estrictamente del lado del servidor. El "Frontmatter" delimitado por `---` permite escribir TypeScript que extrae y transforma los datos. Abajo está el bloque de HTML JSX-like.
- **Ciclo de vida:** Su ciclo de vida ocurre y muere durante `npm run build`. Al renderizar el HTML, Astro borra al componente de su existencia virtual: no mantiene memoria ni requiere control en tiempo real del navegador.

### Componentes de React (`.tsx`)

- **Teoría de Uso:** Componentes `Con Estado (Stateful)`, que requieren reactividad e interacciones dependientes del ciclo de vida en el cliente (`onclick`, timeouts, efectos colaterales asíncronos).
- **Control de Estado Subyacente:** React maneja internamente un "Virtual DOM" (DOM en memoria virtual). Cuando cambia el estado del componente (por ejemplo, clicas un modo oscuro y `useState` se altera), React evalúa teóricamente la diferencia entre el DOM actual y el Virtual DOM, realizando una inyección (Patching) selectivamente para evitar repinturas visuales lentas e innecesarias (Repaints o Reflows).

## 2. Inyección de Dependencias Mediante Props

La teoría principal de flujo de datos arquitectónica (`Data Flow`) que sigue el portafolio es la comunicación descendente **Top-Down Unidireccional** a través de **Props**.

1. **La Página (`Index.astro`):** Recibe la colección completa de registros (Ej: el árbol entero de `spanishData`).
2. **El Layout / Contenedor (`Portfolio.astro`):** Recibe la colección y extrae lógicamente porciones específicas (Ej: extrae `projects` del resto de datos).
3. **El Componente Hijo (`Projects.astro`):** Recibe exclusivamente las propiedades del objeto `projects` (`Array<Project>`) y lo itera realizando un mapeo a tarjetas individuales (`ProjectCard`).

Este modelo evita lo que en ingeniería se llama "Acoplamiento Fuerte", y previene las mutaciones de datos incontroladas (`Side Effects`). Si un componente falla, solo ese bloque del rompecabezas colapsa, no la página entere.
