function loadPosts() {

	const postList =
		document.getElementById("post-list");


	if (!postList) return;


	postList.innerHTML = "";


	fetch("/posts.json")
	.then(res => res.json())
	.then(posts => {

		const lang = getCurrentLang();


		posts
		.filter(post => post.file?.[lang])
		.forEach(post => {


			const card =
				document.createElement("div");


			card.className = "post-card";


			card.innerHTML = `
				<div class="post-number">
					${post.number || "000"}
				</div>

				<div class="post-content">

					<div class="post-date">
						${post.date || ""}
					</div>

					<div class="post-title">
						${post.title[lang]}
					</div>

					<div class="post-excerpt">
						${post.excerpt?.[lang] || ""}
					</div>

				</div>
			`;


			card.onclick = () => {
				location.href =
					`/blog/${post.number}-${lang}.html`;
			};


			postList.appendChild(card);
		});
	});
}



function loadAboutContent() {

	const container =
		document.getElementById("about-content");


	if (!container) return;


	const lang = getCurrentLang();


	fetch(`/about_${lang}.html`)
	.then(res => res.text())
	.then(html => {
		container.innerHTML = html;
	});
}