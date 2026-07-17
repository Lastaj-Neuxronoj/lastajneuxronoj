# # Lastaj Neŭronoj

Generador estático personalizado para el blog multilingüe **Lastaj Neŭronoj**.

El proyecto transforma archivos Markdown en un sitio web HTML completo, incorporando traducciones, referencias, fórmulas matemáticas, resaltado de código, categorías, búsqueda, RSS y estadísticas editoriales.

## Estructura

* `posts/` → archivos Markdown de los artículos.
* `blog/` → sitio HTML generado.
* `scripts/` → scripts del generador y herramientas auxiliares.
* `data/` → datos estructurados del proyecto (posts, traducciones, categorías, etc.).
* `stats/` → estadísticas editoriales e historial de actividad.
* `data/wordpress/` → datos históricos importados desde la versión anterior del blog.
* `analytics/` → análisis de datos y futuros dashboards en R/Shiny.

## Generación del sitio

El flujo principal procesa los archivos Markdown y genera automáticamente:

* páginas de artículos.
* páginas multilingües.
* índices y categorías.
* buscador.
* feeds RSS.
* sitemap.
* estadísticas editoriales.

## Scripts principales

* `build-posts.js` → genera las páginas del blog a partir de los artículos Markdown.
* `build-sitemap.js` → genera el sitemap del sitio.
* `build-stats.js` → calcula estadísticas editoriales e historial.
* `fetch-goatcounter.js` → importa estadísticas de tráfico.

Comandos disponibles:

```bash
npm run build
npm run sitemap
npm run stats
npm run fetch:goatcounter
