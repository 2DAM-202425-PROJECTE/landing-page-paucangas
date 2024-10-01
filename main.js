import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showNext() {
    index++;
    if (index > carousel.children.length - 1) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function showPrev() {
    index--;
    if (index < 0) {
        index = carousel.children.length - 1;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);
