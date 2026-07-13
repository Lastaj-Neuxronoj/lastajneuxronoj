async function loadPost() {
	const container = document.getElementById("post-container");
	if (!container) return;

	const lang = getCurrentLang();
	const translations = await getTranslations();
	const t = translations[lang]?.post || translations.eo.post;
	const backToHomeText = translations[lang]?.backToHome || translations.eo.backToHome;

	const params = new URLSearchParams(window.location.search);
	const postNumber = params.get("post");

	if (!postNumber) {
		container.innerHTML = `<p>${t.notFound}</p>`;
		return;
	}

	try {
		const res = await fetch("json/posts.json");
		const posts = await res.json();
		const currentIndex = posts.findIndex((p) => p.number === postNumber);
		const post = posts[currentIndex];

		if (!post) {
			container.innerHTML = `<p>${t.notFound}</p>`;
			return;
		}

		const title = post.title[lang] || post.title["eo"];
		const mdFile = post.file[lang] || post.file["eo"];

		const mdRes = await fetch(`posts/${mdFile}`);
		if (!mdRes.ok) throw new Error(t.markdownNotFound);
		const md = await mdRes.text();
		const htmlContent = marked.parse(md);

		const prevPost = posts[currentIndex + 1];
		const nextPost = posts[currentIndex - 1];

		document.title = `${title} | Lastaj Neŭronoj`;

		const navControls = `
			<div class="post-nav-controls">
				${prevPost
					? `<a class="post-nav prev-post" href="post.html?post=${prevPost.number}">← ${t.previousPost}</a>`
					: `<div></div>`}
				${nextPost
					? `<a class="post-nav next-post" href="post.html?post=${nextPost.number}">${t.nextPost} →</a>`
					: `<div></div>`}
			</div>
		`;

		const theme = localStorage.getItem("theme") || "light";
		const backIcon = theme === "dark" ? "left_arrow_w.svg" : "left_arrow_b.svg";
		const authorText = post.author?.[lang] || "";
		const typeText = post.type?.[lang] || "";

		container.innerHTML = `
			<article class="full-post">
				<div class="back-link">
					<img id="back-icon" src="./svg/${backIcon}" alt="Flecha hacia atrás" />
					<a id="back-to-home" href="./index.html">${backToHomeText}</a>
				</div>
				<section class="post-header">
					<div class="post-number-bg">${post.number}</div>
					<h1 class="post-title">${title}</h1>
				</section>
				<div class="post-meta">
					<span class="post-date">${post.date}</span> |
					${typeText ? `<span class="post-author">${typeText}</span>` : ""}
					${authorText ? `| <span class="post-author">${authorText}</span>` : ""}
				</div>
				<hr class="rect-line" />
				<div class="post-content">${htmlContent}</div>
				${navControls}
			</article>
		`;
	} catch (err) {
		container.innerHTML = `<p>${t.contentLoadError}: ${err.message}</p>`;
		console.error(err);
	}
}

// BARRA DE PROGRESO
function setupProgressBar() {
	const progressBar = document.getElementById("progress-bar");
	if (!progressBar) return;

	window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 105;

		const styles = getComputedStyle(document.body);
		const colorNormal = styles.getPropertyValue("--progress-color").trim();
		const colorComplete = styles.getPropertyValue("--progress-complete").trim();

		progressBar.style.width = scrollPercent + "%";
		progressBar.style.backgroundColor = scrollPercent >= 99.5 ? colorComplete : colorNormal;
	});
}