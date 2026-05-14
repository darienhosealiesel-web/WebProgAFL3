window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("backdrop-blur-md", "bg-white/30");
        } else {
            navbar.classList.remove("backdrop-blur-md", "bg-white/30");
        }
    });
    nav.classList.add("shadow-xl", "bg-[#e5e5e5]/50", "backdrop-blur-md");
})

let currentIndex = 0;

const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll('.fade-init');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('fade-show');
            } else {
                entry.target.classList.remove('fade-show');
            }

        });
    }, {
        threshold: 0.25
    });

    elements.forEach(el => observer.observe(el));

});