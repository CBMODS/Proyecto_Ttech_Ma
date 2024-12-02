let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images > div');
const totalImages = images.length;
const carouselImages = document.getElementById('carouselImages');

// Función para mostrar la imagen siguiente
function showNext() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Función para mostrar la imagen anterior
function showPrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Botones de navegación
document.getElementById('next').addEventListener('click', showNext);
document.getElementById('prev').addEventListener('click', showPrev);

// Cambiar automáticamente cada 5 segundos
setInterval(showNext, 5000);
