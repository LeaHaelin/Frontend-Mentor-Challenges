const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".works__slide");
const prevBtn = document.getElementById("arrow--left");
const nextBtn = document.getElementById("arrow--right");
const firstSlide = document.getElementById("first-slide");

nextBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth + 15;
    slidesContainer.scrollLeft += slideWidth;
})

prevBtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth + 15;
    slidesContainer.scrollLeft -= slideWidth;
})


