<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GNOSEOMÁTICO</title>

    <!-- Styles -->
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="./post.css" />
    <link rel="stylesheet" href="./header_footer.css" />
    <link rel="stylesheet" href="./mobile.css" media="(max-width: 768px)">

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Vollkorn:ital,wght@0,400..900;1,400..900&display=swap"
        rel="stylesheet">
</head>

<body>
    <!-- Barra superior -->
    <header class="top-bar">
        <div class="logo" id="logo-text">GNOSEOMÁTICO_</div>

        <nav class="nav-links" id="nav-links">
            <a id="nav-home" href="./index.html">[ Inicio ]</a>
            <a id="nav-about" href="./about.html">[ Sobre mí ]</a>
            <button class="lang-switch" id="lang-switch">[ES]</button>
            <button class="theme-switch" id="theme-switch">
                <img id="theme-icon" src="./svg/sun_w.svg" alt="Cambiar tema" />
            </button>
        </nav>

        <!-- Botón de menú hamburguesa (visible solo en móvil) -->
        <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú">
            <img src="./svg/menu_b.svg" alt="Abrir menú" id="menu-icon">
        </button>
    </header>

    <!-- Barra de progreso -->
    <div id="progress-bar-container" class="progress-bar-container">
        <div class="progress-bar" id="progress-bar"></div>
    </div>

    <main class="post-body" id="post-container">
        <!-- Aquí se cargará dinámicamente la entrada -->
    </main>

    <footer class="footer">
        <div class="footer-text" id="footer-text">GNOSEOMÁTICO — 2025</div>
        <div class="footer-icons">
            <img src="./svg/notbyai-es.svg" alt="Creado por un humano, no por IA" class="footer-icon" />
            <img src="./svg/notbyai-eo.svg" alt="Produkita de homo, ne de AI" class="footer-icon" />
        </div>
    </footer>

    <script src="./post.js"></script>
    <script src="./translation.js"></script>
</body>

</html>