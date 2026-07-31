# Carpintería Artesanal — Landing Page

Landing page estática y responsive para una carpintería, construida con HTML + Tailwind CSS. Optimizada para publicar en GitHub Pages.

## Estructura del proyecto

```
carpinteria/
├── index.html               # Página principal
├── output.css               # CSS compilado por Tailwind (commiteado)
├── src/
│   └── input.css            # CSS fuente (directivas @tailwind + componentes)
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind
└── .github/
    └── workflows/
        └── deploy.yml       # CI/CD: build automático + deploy a gh-pages
```

## Desarrollo local

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior

### Instalar dependencias

```bash
npm install
```

### Modo desarrollo (watch)

Compila el CSS automáticamente cada vez que edites `index.html` o `src/input.css`:

```bash
npm run dev
```

Luego abre `index.html` directamente en el navegador (o usa una extensión como Live Server en VS Code).

### Build para producción

```bash
npm run build
```

Genera `output.css` minificado. Asegúrate de commitear este archivo antes de hacer push.

## Personalización

### Número de WhatsApp

Busca todas las ocurrencias de `573100000000` en `index.html` y reemplázalas con tu número en formato internacional (sin `+`, sin espacios):

```
https://wa.me/TU_NUMERO_AQUI
```

Por ejemplo, para el número +54 9 11 2345-6789: `5491123456789`

### Nombre del negocio

Busca `Carpintería Artesanal` en `index.html` y reemplázalo con el nombre real del negocio.

### Colores

La paleta principal está definida en `tailwind.config.js`. El color de acento principal es `amber-600`. Para cambiarlo, edita las clases en `index.html` (busca `amber-600`, `amber-500`, etc.) o extiende el tema en `tailwind.config.js`.

### Imágenes

Las imágenes provienen de [Unsplash](https://unsplash.com) vía URL directa. Para usar imágenes propias:

1. Guarda las imágenes en una carpeta `/img/` dentro del repositorio.
2. Reemplaza las URLs de Unsplash por rutas relativas, por ejemplo: `src="img/mesa-comedor.jpg"`.

## Deploy en GitHub Pages

### Opción 1: Automático con GitHub Actions (recomendado)

El archivo `.github/workflows/deploy.yml` compila el CSS y publica automáticamente en la rama `gh-pages` cada vez que hagas push a `main`.

**Pasos:**

1. Haz push del repositorio a GitHub.
2. Ve a **Settings → Pages** en tu repositorio.
3. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`.
4. Guarda. En el próximo push a `main`, el workflow compilará y publicará la página.

### Opción 2: Manual (sin GitHub Actions)

1. Ejecuta `npm run build` para generar `output.css`.
2. Haz commit de `output.css`.
3. Ve a **Settings → Pages** y selecciona la rama `main` como source.

Tu landing quedará disponible en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

## Tecnologías

- [Tailwind CSS v3](https://tailwindcss.com/) — utilidades CSS
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Inter
- [Unsplash](https://unsplash.com/) — imágenes de ejemplo
- [GitHub Pages](https://pages.github.com/) — hosting gratuito
- [GitHub Actions](https://github.com/features/actions) — CI/CD automático
