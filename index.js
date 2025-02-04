let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slide');
    const totalSlides = document.querySelectorAll('.card').length;
    if (index >= totalSlides/2) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(${-currentIndex * 120}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
