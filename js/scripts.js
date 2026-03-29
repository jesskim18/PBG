lucide.createIcons();
/* Click directo en el slide clickeado */
slides.forEach(slide => {
    slide.addEventListener("click", function(e) {

        // Evita que las flechas redirijan
        if (e.target.closest(".slider-nav")) return;

        const link = this.getAttribute("data-link");

        if (link) {
            window.location.href = link;
        }

    });
});