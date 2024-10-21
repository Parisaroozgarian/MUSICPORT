// Handle Navbar scroll effect with smooth background transition
const header = document.querySelector('header');
const menuToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-nav');

// Add 'scrolled' class to the header when the window is scrolled
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
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle audio error events for a better user experience
const audioElements = document.querySelectorAll('audio');
audioElements.forEach(audio => {
    audio.addEventListener('error', () => {
        console.error(`Error loading audio: ${audio.src}`);
    });
});

// JavaScript to handle genre selection for the music section
const genreButtons = document.querySelectorAll('.genre-button');
const musicContainers = document.querySelectorAll('.music-container');

// Function to handle genre selection
const handleGenreSelection = (genre) => {
    console.log(`Switching to genre: ${genre}`);  // Debugging
    // Hide all music containers
    musicContainers.forEach(container => {
        container.classList.remove('active');
    });

    // Show only the music container that matches the selected genre
    const targetContainer = document.querySelector(`.music-container[data-genre="${genre}"]`);
    if (targetContainer) {
        targetContainer.classList.add('active');
    } else {
        console.error(`No container found for genre: ${genre}`);  // Debugging
    }
};

// Add event listeners to genre buttons
genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the genre from the button's data attribute
        const genre = button.getAttribute('data-genre');

        // Update active button styles
        genreButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Call the function to handle genre selection
        handleGenreSelection(genre);
    });
});

// On page load, make sure the first genre is active
document.addEventListener('DOMContentLoaded', () => {
    const firstActiveGenre = document.querySelector('.genre-button.active').getAttribute('data-genre');
    handleGenreSelection(firstActiveGenre);
});
