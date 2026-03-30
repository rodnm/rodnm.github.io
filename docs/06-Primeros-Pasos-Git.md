# Cómo subir tu proyecto a GitHub

¡Tu proyecto ya está listo! Sigue estos pasos para subirlo a GitHub.

## Paso 1: Crear el repositorio en GitHub

1.  Ve a [github.com/new](https://github.com/new).
2.  Escribe un nombre para tu repositorio (ej: `mi-portafolio`).
3.  **No** marques ninguna casilla (README, .gitignore, License) porque ya las tenemos.
4.  Haz clic en **Create repository**.

## Paso 2: Subir tu código

Copia y pega estos comandos en tu terminal (uno por uno):

```bash
# 1. Asegura que todos los archivos estén en el área de preparación
git add .

# 2. Guarda los cambios
git commit -m "Mi portafolio listo para despegar 🚀"

# 3. Renombra la rama principal a 'main' (si no lo es ya)
git branch -M main

# 4. Conecta tu carpeta con GitHub (REEMPLAZA LA URL)
# Copia la URL que te dio GitHub en el paso 1
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git

# 5. Sube los archivos
git push -u origin main
```

## ¡Listo!

Recarga la página de GitHub y verás tus archivos.
