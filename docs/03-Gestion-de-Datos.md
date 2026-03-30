# Ingeniería y Modelado de Datos

Pese a ser estático visualmente, el portafolio posee un sistema robusto de tipado y control para aislar el Modelo (Los Datos) de la Vista (Las Pantallas HTML).

## 1. Patrón Vista-Modelo Centralizado (`src/config.ts`)

La decisión técnica más crucial es consolidar toda la capa de persistencia en memoria en un solo archivo transaccional: el `src/config.ts`. Este patrón imita una Base de Datos NoSQL.

Todos los objetos y `arrays` allí definidos exportan estructuras semánticas e idiomáticas (`spanishData`, `englishData`). Éste es el **SOT (Source of Truth)** o Única Fuente de la Verdad. Ningún componente interno inventa texto libremente (Magical Strings); todos leen de este archivo central por inyección.

## 2. Validación de Contratos Base (Schemas con Zod)

Para prevenir regresiones al editar código y fallos por la ausencia de un manejador de Base de Datos tradicional (como PostgreSQL o MongoDB), implementamos una suite estricta de validación teórica llamada **Zod**:

### Sistema Teórico de Tipos

TypeScript (`interface`) existe solo en tiempo de desarrollo. Proporciona ayuda a nivel visual en el editor de código, sin embargo cuando el código se empaqueta, esos tipos se borran y el código se vuelve Javascript en estado crudo, lo cual no es seguro.

### Validación en Memoria de Runtime con Zod

Zod funciona en tiempo de compilación. Generamos **Esquemas Rígidos** en `config.ts`:

```typescript
const ProjectSchema = z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url(),
    image: ImageMetadataSchema,
});
```

Aquí aplicamos validación con la directiva matemática `.parse()`. Si, por ejemplo, al editar alguien introduce una cadena (`string`) cualquiera o elimina el archivo en la variable estática `link` donde debería ir un `.url()` de protocolo HTTP, **el proceso de construcción se abortará lanzando un error**.

Esto materializa una mentalidad de ingeniería de datos, obligando al proveedor de información a mantener integridad de los registros garantizando 0% de imperfecciones o enlaces quebrados en el árbol de dependencias (`Dependency Graph`).

## 3. Resolución Simétrica por i18n

El mecanismo Multi-idiomas se construyó para ser un sistema de **Sustitución Simétrica**:
`spanishData` y `englishData` resuelven sobre la misma estructura de interfaz (`PortfolioDataSchema`). Los componentes de Astro reciben una `prop` denominada `currentLocale`. En base al `Locale` recibido el algoritmo interno de la ruta madre simplemente extrae uno u otro objeto y lo inyecta completo al motor de renderizado (`Dependency Injection Pattern`).
