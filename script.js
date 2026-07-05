const postList = document.getElementById("post-list");
const lang = localStorage.getItem("lang") || "es";

fetch("posts.json")
    .then((res) => res.json())
    .then((posts) => {
        posts.forEach((post) => {
            const title = post.title?.[lang] || post.title?.["es"] || "Sin título";
            const file = post.file?.[lang] || post.file?.["es"];
            const excerpt = post.excerpt?.[lang] || post.excerpt?.["es"] || "";
            const tags = Array.isArray(post.tags)
                ? post.tags.join(", ")
                : post.tags || "";

            if (!file) return; // Si no hay archivo, no continuar

            fetch(`posts/${file}`)
                .then((res) => res.text())
                .then((mdText) => {
                    const card = document.createElement("div");
                    card.className = "post-card";

                    card.innerHTML = `
                        <div class="post-number">${post.number || "000"}</div>
                        <div class="post-content">
                            <div class="post-date">${post.date || "Sin fecha"}</div>
                            <div class="post-title">${title}</div>
                            <div class="post-tags">${tags}</div>
                            <div class="post-excerpt">${excerpt}</div>
                        </div>
                    `;

                    card.addEventListener("click", () => {
                        window.location.href = `post.html?post=${post.number}`;
                    });

                    postList.appendChild(card);
                });
        });
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

// Evento de clic en botón de menú
menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-label', menuOpen ? 'Cerrar menú' : 'Abrir menú');
  updateMenuIcon();
});

// Al cargar la página, actualizar ícono por si ya hay tema activo
document.addEventListener("DOMContentLoaded", () => {
  updateMenuIcon();
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
