
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. MODO OSCURO Y MODO CLARO
    // =================================

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Comprobar si el usuario guardó una preferencia
    const savedTheme = localStorage.getItem("theme");

    // Detectar el tema del dispositivo
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    // Aplicar el tema inicial
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark");
    }

    updateThemeIcon();

    // Cambiar entre modo oscuro y claro
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const currentTheme = document.body.classList.contains("dark")
            ? "dark"
            : "light";

        localStorage.setItem("theme", currentTheme);

        updateThemeIcon();
    });

    // Actualizar el icono del botón
    function updateThemeIcon() {

        if (document.body.classList.contains("dark")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    }


    // =================================
    // 2. NAVEGACIÓN SUAVE
    // =================================

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const menu = document.getElementById("menu");

            if (menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }

        });

    });


    // =================================
    // 3. VALIDACIÓN DEL FORMULARIO
    // =================================

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Comprobar que todos los campos estén completos
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        // Mostrar confirmación
        alert("¡Mensaje enviado! 📧 Gracias por contactarme.");

        // Limpiar los campos
        contactForm.reset();

    });

});
