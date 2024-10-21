// Navbar scroll effect with smooth background transition
const header = document.querySelector('header');
const menuToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-nav');

// Add 'scrolled' class to header when window is scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle with animation
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('toggled');
    });
}

// Intersection Observer for section visibility on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe each section for visibility
sections.forEach((section) => {
    observer.observe(section);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Handle audio error events for a better user experience
const audioElements = document.querySelectorAll('audio');
audioElements.forEach(audio => {
    audio.addEventListener('error', () => {
        console.error(`Error loading audio: ${audio.src}`);
    });
});
