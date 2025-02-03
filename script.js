document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const beneficioCards = document.querySelectorAll(".beneficio-card");

    const handleScroll = () => {
        const scrollTop = window.scrollY + window.innerHeight;

        // biome-ignore lint/complexity/noForEach: <explanation>
        sections.forEach((section) => {
            if (section.offsetTop < scrollTop - 100) {
                section.classList.add("visible");
            }
        });

        beneficioCards.forEach((card, index) => {
            setTimeout(() => {
                if (card.offsetTop < scrollTop - 100) {
                    card.classList.add("visible");
                }
            }, index * 200); // Retraso progresivo para efecto de aparición escalonado
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
