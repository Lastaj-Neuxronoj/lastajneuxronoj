const fs = require("fs/promises");
const path = require("path");


async function buildCategories(posts, outputDir) {

	const categories = {};

	for (const post of posts) {

		if (!post.category) {
			continue;
		}

		for (const lang of Object.keys(post.file || {})) {
			if (!categories[post.category]) {

				categories[post.category] = {
					count: {}
				};
			}

			if (!categories[post.category].count[lang]) {

				categories[post.category].count[lang] = 0;
			}


			categories[post.category]
				.count[lang]++;

		}
	}


	const outDir =
		path.join(
			outputDir,
			"categories"
		);


	await fs.mkdir(
		outDir,
		{
			recursive: true
		}
	);


	const outPath =
		path.join(
			outDir,
			"categories.json"
		);

	await fs.writeFile(
		outPath,
		JSON.stringify(
			categories,
			null,
			2
		),
		"utf-8"
	);


	console.log(
		`✔ Índice de categorías generado: ${outPath}`
	);

	return categories;
}


module.exports = {
	buildCategories
};