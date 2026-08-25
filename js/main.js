document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        siteNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    document.querySelectorAll(".play-store-cta").forEach((button) => {
        button.addEventListener("click", () => {
            console.log("play_store_click", {
                page: button.dataset.page || "unknown"
            });
        });
    });
});
