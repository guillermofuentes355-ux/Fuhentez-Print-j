# FUHENTES PRINT — Vercel

Sitio estático listo para desplegar, sin dependencias ni claves API.

## Publicar con GitHub
1. Descomprime el ZIP.
2. Sube el contenido de esta carpeta a un repositorio de GitHub. Deja vercel.json en la raíz, junto a public/.
3. En Vercel selecciona Add New → Project e importa el repositorio.
4. Framework Preset: Other. Root Directory: ./ (la carpeta que contiene vercel.json). Build Command: vacío. Output Directory: public.
5. Pulsa Deploy.

La configuración ya está incluida en vercel.json.

## Alternativa con terminal
Desde esta carpeta, con Node.js instalado:

```sh
npx vercel --prod
```

Inicia sesión y sigue las indicaciones para vincular el proyecto.

## Editar o abrir localmente
- Abre public/index.html en tu navegador.
- Texto y secciones: public/index.html.
- Colores y diseño adaptable: public/style.css.
- Filtros y resumen descargable: public/app.js.
- Imágenes PNG transparentes: public/assets/.

El formulario genera un archivo de texto local; no envía mensajes ni pedidos. Aún no se han añadido WhatsApp, dirección ni redes reales.

La camisa y el banner son imágenes de presentación generadas para este diseño. No son fotografías de productos fabricados por la empresa.

Documentación oficial: https://vercel.com/docs/builds/configure-a-build
