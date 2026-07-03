const container = document.getElementById("post-container");
const langSwitchBtn = document.getElementById("lang-switch");

// Obtener idioma actual o defecto "es"
let lang = localStorage.getItem("lang") || "es";

// Obtener número del post desde la URL
const params = new URLSearchParams(window.location.search);
const postNumber = params.get("post");

if (!postNumber) {
  container.innerHTML = "<p>Post no encontrado.</p>";
} else {
  fetch("posts.json")
    .then((res) => res.json())
    .then((posts) => {
      const post = posts.find((p) => p.number === postNumber);
      if (!post) {
        container.innerHTML = "<p>Post no encontrado.</p>";
        return;
      }

      // Obtener título y archivo según idioma
      const title = post.title[lang] || post.title["es"];
      const mdFile = post.file[lang] || post.file["es"];

      fetch(`posts/${mdFile}`)
        .then((res) => {
          if (!res.ok) throw new Error("Archivo markdown no encontrado");
          return res.text();
        })
        .then((md) => {
          const htmlContent = marked.parse(md);

          const currentIndex = posts.findIndex((p) => p.number === postNumber);
          const prevPost = posts[currentIndex - 1];
          const nextPost = posts[currentIndex + 1];

          document.title = `${title} | GNOSEOMÁTICO_`;

          const navControls = `
            <div class="post-nav-controls">
              ${prevPost
              ? `<a class="post-nav prev-post" href="post.html?post=${prevPost.number}">← ${lang === "es"
                ? "PUBLICACIÓN ANTERIOR"
                : "ANTAŬA AFIŜO"
              }</a>`
              : `<div></div>`
            }
              ${nextPost
              ? `<a class="post-nav next-post" href="post.html?post=${nextPost.number}">${lang === "es" ? "PUBLICACIÓN SIGUIENTE →" : "SEKVA AFIŜO →"
              }</a>`
              : `<div></div>`
            }
            </div>
          `;

          const backText = lang === "es" ? "VOLVER AL INICIO" : "REVENI AL LA ĈEFPAĜO";
          const theme = localStorage.getItem("theme") || "light";
          const backIcon = theme === "dark" ? "left_arrow_w.svg" : "left_arrow_b.svg"

          const authorText = post.author?.[lang] || "";
          const typeText = post.type?.[lang] || "";

          container.innerHTML = `
            <article class="full-post">
              <div class="back-link">
                <img  id="back-icon" src="./svg/${backIcon}" alt="Flecha hacia atrás" />
                <a href="./index.html">${backText}</a>
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
        })
        .catch((err) => {
          container.innerHTML = `<p>Error al cargar contenido: ${err.message}</p>`;
          console.error(err);
        });
    });
}

// BARRA DE PROGRESO
window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 105;

  const styles = getComputedStyle(document.body);
  const colorNormal = styles.getPropertyValue('--progress-color').trim();
  const colorComplete = styles.getPropertyValue('--progress-complete').trim();

  progressBar.style.width = scrollPercent + "%";
  progressBar.style.backgroundColor = scrollPercent >= 99.5 ? colorComplete : colorNormal;
});

// BOTÓN DE MENÚ
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');

let menuOpen = false;

// Función para actualizar el ícono según tema y estado
const updateMenuIcon = () => {
  const isDark = document.body.classList.contains('dark');
  if (menuOpen) {
    menuIcon.src = isDark ? './svg/close_menu_w.svg' : './svg/close_menu_b.svg';
  } else {
    menuIcon.src = isDark ? './svg/menu_w.svg' : './svg/menu_b.svg';
  }
};

// Al cargar la página, actualizar ícono por si ya hay tema activo
document.addEventListener("DOMContentLoaded", () => {
  updateMenuIcon();
});

const progressContainer = document.getElementById("progress-bar-container");

// Evento de hacer click en el menú
menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;

  menuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
  navLinks.classList.toggle('open');
  updateMenuIcon();

  // ACTUALIZAR POSICIÓN DE LA BARRA DE PROGRESO
  if (menuOpen) {
    progressContainer.style.top = "217px"; // Ajustá según altura del menú desplegado
  } else {
    progressContainer.style.top = "67px";  // Valor normal
  }
});


// MODO OSCURO
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "light";
  const body = document.body;
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");

  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark");
      html.classList.add("dark");
      icon.src = "./svg/moon_b.svg"; // Ícono sol negro
      icon.alt = "Modo claro";
    } else {
      body.classList.remove("dark");
      html.classList.remove("dark");
      icon.src = "./svg/sun_w.svg"; // Ícono luna negro
      icon.alt = "Modo oscuro";
    }

    const backIcon = document.getElementById("back-icon");
    if (backIcon) {
      backIcon.src = theme === "dark" ? "./svg/left_arrow_w.svg" : "./svg/left_arrow_b.svg";
    }

    updateMenuIcon(); // <-- Actualiza ícono del menú según tema
  };

  applyTheme(theme);

  document.getElementById("theme-switch").addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "light";
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
});
