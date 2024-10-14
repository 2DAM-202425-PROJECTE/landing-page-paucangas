import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

let currentIndex = 1; // Start from the first original item
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveToSlide(index, transition = true) {
    if (transition) {
        carousel.style.transition = 'transform 0.5s ease';
    } else {
        carousel.style.transition = 'none';
    }
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    moveToSlide(currentIndex);
    if (currentIndex === totalItems - 1) {
        setTimeout(() => {
            currentIndex = 1;
            moveToSlide(currentIndex, false);
        }, 500); // Match the transition duration
    }
}

function prevSlide() {
    currentIndex--;
    moveToSlide(currentIndex);
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalItems - 2;
            moveToSlide(currentIndex, false);
        }, 500); // Match the transition duration
    }
}

setInterval(nextSlide, 3000); // Adjust the interval as needed

// Event listeners for buttons (if needed)
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Initial position
moveToSlide(currentIndex);

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
});

// Selecciona todos los elementos h2 para el efecto de máquina de escribir
const headings = document.querySelectorAll("h2");
headings.forEach((element) => {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

// Efecto dinámico para h3
const headingsH3 = document.querySelectorAll("h3");
const colors = ['#FF0000', '#FF7F00', '#00BFFF', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

headingsH3.forEach((element) => {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;

    function dynamicZoomEffect() {
        if (i < text.length) {
            element.innerHTML += `<span style="opacity: 0; transform: scale(0.5) rotate(10deg); transition: opacity 0.5s ease, transform 0.7s ease; color: ${colors[i % colors.length]};">${text.charAt(i)}</span>`;
            const span = element.querySelectorAll("span")[i];

            setTimeout(() => {
                span.style.opacity = 1;
                span.style.transform = "scale(1.2) rotate(0deg)";
            }, 100);

            i++;
            setTimeout(dynamicZoomEffect, 100);
        }
    }

    dynamicZoomEffect();
});

// Efecto de aparición gradual para h4
const headingsH4 = document.querySelectorAll("h4");

headingsH4.forEach((element) => {
    setTimeout(() => {
        element.classList.add('appear');
    }, 500);
});

// Formulario de contacto y envío de datos con EmailJS
