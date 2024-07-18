function readMore() {
    alert("더 읽기 기능은 아직 구현되지 않았습니다!");
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
