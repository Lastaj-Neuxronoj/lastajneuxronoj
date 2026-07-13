// scripts/config.js
// Estadísticas generadas automáticamente.
// Estos archivos pueden ser consumidos por
// herramientas externas como el dashboard en R.

const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const COVERS_DIR =
	path.join(ROOT, "covers");

const COVER_EXTENSIONS = [
	"png",
	"jpg",
	"jpeg",
	"webp",
	"gif"
];

module.exports = {

	ROOT,

	SITE_URL:
		"https://lastajneuxronoj.github.io/",

	LANGUAGE_NAMES: {

		//Agregar idiomas aquí
		es: "Español",
		eo: "Esperanto"
	},

	COVERS_DIR,
	COVER_EXTENSIONS,

	SEARCH_DIR:
	path.join(ROOT, "search"),

	POSTS_JSON_PATH:
		path.join(ROOT, "posts.json"),

	PAGES_JSON_PATH:
		path.join(ROOT, "pages.json"),

	TRANSLATIONS_JSON_PATH:
		path.join(ROOT, "translations.json"),

	POSTS_MD_DIR:
		path.join(ROOT, "posts"),

	OUTPUT_DIR:
		path.join(ROOT, "blog"),

	ABOUT_OUTPUT_DIR:
		ROOT,

	SITEMAP_PATH:
		path.join(ROOT, "sitemap.xml"),

	SITEMAP_EXTRA_PATH:
		path.join(ROOT, "sitemap-extra.json"),

	STATS_DIR:
		path.join(ROOT, "stats"),
	
	STATS_JSON_PATH:
		path.join(ROOT, "stats", "stats.json"),
	
	STATS_REPORT_PATH:
		path.join(ROOT, "stats", "stats-report.txt"),
	
	HISTORY_JSON_PATH:
		path.join(ROOT, "stats", "history.json"),
	
	

};