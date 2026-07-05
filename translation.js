document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "es";

  fetch("./translations.json")
    .then(res => res.json())
    .then(translations => {
      const t = translations[lang];
      if (!t) return;

      const applyText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };

      applyText("logo-text", t.logo_text);
      applyText("nav-home", t.nav_home);
      applyText("nav-about", t.nav_about);
      applyText("lang-switch", t.lang_code);
      applyText("posts-label-bg", t.posts_label_bg);
      applyText("posts-label", t.posts_label);
      applyText("footer-text", t.footer_text);
    });

  // Cambiar idioma al hacer click
  document.getElementById("lang-switch").addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "es";
    const next = current === "es" ? "eo" : "es";
    localStorage.setItem("lang", next);
    location.reload();
  });
});
