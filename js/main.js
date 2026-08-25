document.addEventListener("DOMContentLoaded", () => {
    const playStoreButtons = document.querySelectorAll(".play-store-cta");

    playStoreButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const page = button.dataset.page || "unknown";

            console.log("play_store_click", {
                page
            });
        });
    });
});
