# Surf Islas Canarias — web profesional

La web está lista para subir a **surfislascanarias/surfislascanarias**. Incluye 47 páginas estáticas, tu logotipo, imágenes del archivo de la marca, las ocho islas, nueve modalidades, trece fichas de spots, mapa, previsión, agenda, noticias, multimedia, ANSA y LWF2027.

## Verla antes de subir

1. Descomprime el ZIP.
2. Abre `index.html`. Puedes navegar por todas las páginas.
3. El mapa y la previsión necesitan conexión a Internet. Para reproducir el entorno de alojamiento con Python instalado: abre una terminal dentro de la carpeta y ejecuta `python -m http.server 8000`; visita `http://localhost:8000`.

## Subir desde la web de GitHub

1. Abre <https://github.com/surfislascanarias/surfislascanarias>.
2. Crea una rama llamada `web-profesional` desde `main` para revisar esta versión antes de publicarla.
3. Dentro de esa rama, pulsa **Add file → Upload files**.
4. Arrastra el **contenido** de la carpeta descomprimida. `index.html` debe quedar en la raíz, junto a `assets/`, `islas/`, `spots/`, `eventos/` y `articulos/`.
   Si GitHub limita los archivos de una carga, sube primero las páginas de la raíz y después las carpetas en cargas separadas, manteniendo sus nombres y estructura. No subas el ZIP sin descomprimir.
5. Escribe como mensaje `Preparar web profesional de Surf Islas Canarias` y confirma los archivos.
6. Revisa el cambio. Cuando quieras publicarlo, abre una Pull Request desde `web-profesional` hacia `main` y fusiónala.

Si prefieres publicar directamente, puedes subir los archivos a `main`; reemplazará las páginas con el mismo nombre. Se incluye `legacy/` con una copia del HTML, CSS y JavaScript anterior. Los archivos gráficos originales que ya existen en tu repositorio deben conservarse.

## Publicar con GitHub Pages

En **Settings → Pages**, usa **Deploy from a branch → main → /(root)** y pulsa **Save**. No necesitas Node, npm, un servidor de base de datos ni instalar paquetes. El archivo `.nojekyll` evita el procesamiento de Jekyll.

Si tu repositorio ya utiliza GitHub Actions para publicar, conserva la configuración que corresponda a ese alojamiento. La web se sirve desde la raíz de esta entrega. Comprueba que la configuración anterior no espere una carpeta de salida de Next.js.

El código usa rutas relativas y funciona tanto en la URL de proyecto de GitHub Pages como en un dominio propio. El dominio y DNS actuales de Cloudflare no se modifican con esta entrega. Mantén la configuración existente de `surfislascanarias.com` y cualquier archivo `CNAME` que ya utilices. Las etiquetas canónicas y el sitemap apuntan a ese dominio.

Guía oficial: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## Qué está conectado

- **Instagram, Facebook y TikTok:** enlaces de tu web original.
- **Previsión:** consulta real a Open-Meteo, con unidades, hora de Canarias, cancelación de consultas anteriores y estados de error. No hay cifras de demostración.
- **Mapa:** Leaflet 1.9.4 incluido localmente y cartografía de OpenStreetMap. Las coordenadas son orientativas.
- **Contactar:** prepara y copia un mensaje para enviarlo por Instagram. No simula un envío de email.
- **Calendario:** muestra solo fechas anunciadas. Frontón King 2026 incluye descarga de la ventana en formato `.ics`.
- **Noticias:** guías propias y enlaces directos a las fuentes oficiales; no se presentan titulares ficticios como noticias recientes.

## Actualizar el contenido

Los datos principales se editan en `data/content.json`. Después ejecuta:

```bash
python scripts/build.py
```

El generador usa exclusivamente la biblioteca estándar de Python. Regenera páginas, `assets/js/content.js`, sitemap y metadatos. El diseño está en `assets/css/style.css`; las interacciones, en `assets/js/app.js`.

Para cambiar textos editoriales de portada, artículos, contacto o proyectos, edita `scripts/build.py` y vuelve a generar. Las páginas ya generadas pueden editarse directamente si no vas a ejecutar otra vez el generador.

Para añadir un evento, indica `start` y `end` únicamente con fechas oficiales en formato `AAAA-MM-DD`; sin confirmación, déjalas en `null`. Conserva el enlace `source` de la organización. LWF2027 aparece como proyecto en desarrollo.

La configuración actual de Open-Meteo usa su servicio público para uso no comercial. Si cambias la web a una explotación comercial, revisa las condiciones del proveedor y conecta la modalidad de servicio que corresponda sin exponer claves privadas.

## Conservación y fuentes

Se conservan los apartados y la identidad de la marca. `legacy/` contiene las páginas y scripts recuperados del commit `1dc8b9b3a079d09412680d34a4b9ce48fd2ab3a7` del repositorio oficial; es una copia de referencia, no la web activa. Las imágenes originales completas siguen en el repositorio.

La web anterior contenía teléfonos de ejemplo y un formulario de demostración. La nueva entrega utiliza el contacto público confirmado de Instagram. No incluye precios, testimonios ni acuerdos comerciales inventados.

Las fuentes y créditos están visibles en `fuentes.html`. Leaflet conserva su licencia. Los logotipos y las fotografías proceden del repositorio de la marca; esta entrega no cambia su titularidad.

Fecha de revisión: **8 de octubre de 2026**.
