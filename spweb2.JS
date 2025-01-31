// Smooth Scrolling for Navigation Links

// Image Zoom Effect for Gallery
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Logo Flash Effect
    const logoContainer = document.querySelector(".logo-container");
    const flashEffect = document.createElement("div");
    flashEffect.classList.add("flash-effect");
    document.body.appendChild(flashEffect);

    logoContainer.addEventListener("mouseenter", () => {
        flashEffect.style.opacity = "1";
        setTimeout(() => {
            flashEffect.style.opacity = "0";
        }, 100);
    });
});

// ✅ Mobile Menu Toggle
function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("show");
}
