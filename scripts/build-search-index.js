const fs = require("fs/promises");
const path = require("path");

const {
	POSTS_JSON_PATH,
	SEARCH_DIR
} = require("./config");

async function buildSearchIndex(language) {

	const posts = JSON.parse(
		await fs.readFile(
			POSTS_JSON_PATH,
			"utf8"
		)
	);


	const index = posts
		.filter(post =>
			post.title?.[language]
		)
	.map(post => {

		const fileName =
			post.file[language]
				.replace(/_/g, "-")
				.replace(/\.md$/i, ".html");


		return {

			number:
				post.number || "",

			title:
				post.title[language],


			excerpt:
				post.excerpt?.[language] || "",


			type:
				post.type?.[language] || "",


			category:
				post.category || "",


			emoji:
				post.emoji || "",

			cover:
				post.cover || "",


			url:
				`/blog/${fileName}`

		};

	});


	await fs.mkdir(
		SEARCH_DIR,
		{ recursive: true }
	);


	await fs.writeFile(
		path.join(
			SEARCH_DIR,
			`search-${language}.json`
		),
		JSON.stringify(
			index,
			null,
			2
		),
		"utf8"
	);


	console.log(
		`✔ Índice de búsqueda generado: search-${language}.json`
	);

}


module.exports = buildSearchIndex;