document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".aventuras .prev");
    const nextButton = document.querySelector(".aventuras .next");
    const carousel = document.querySelector(".aventuras-carousel");
    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = document.querySelector(".aventura-item").offsetWidth + 16;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener("click", () => {
        const totalItems = document.querySelectorAll(".aventura-item").length;
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});
