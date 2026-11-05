# Surf Islas Canarias

Web profesional estática para GitHub Pages. Sin dependencias de compilación ni backend.

Consulta [LEEME_PRIMERO.md](LEEME_PRIMERO.md) para previsualizar, subir, publicar y editar.

## Estructura

- `index.html`: portada.
- `islas.html`, `islas/`: las ocho islas y alias compatibles con rutas anteriores.
- `spots.html`, `spots/`: directorio, filtros, mapa y trece fichas.
- `modalidades.html`: nueve modalidades.
- `prevision.html`: oleaje y viento con Open-Meteo.
- `eventos.html`, `eventos/`: calendario y fichas.
- `campeonatos.html`: categorías y fuentes federativas.
- `blog.html`, `articulos/`: noticias y guías.
- `multimedia.html`: imágenes y canales sociales.
- `about.html`, `proyectos.html`, `contact.html`: marca, ANSA, LWF2027 y colaboración.
- `fuentes.html`, `privacidad.html`: información editorial y de servicios externos.
- `data/content.json`, `scripts/build.py`: contenido y generador.
- `assets/`: estilos, scripts, imágenes y Leaflet local.
- `legacy/`: código anterior conservado como referencia.

## Desarrollo

```bash
python scripts/build.py
python -m http.server 8000
```

Abre `http://localhost:8000`.

## Validación

```bash
python scripts/validate.py
node --check assets/js/app.js
```

El comprobador revisa las rutas, anclas y recursos locales de las páginas activas. No prueba la disponibilidad futura de los servicios externos.
