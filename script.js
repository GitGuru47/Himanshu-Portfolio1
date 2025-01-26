// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Smooth scroll to the contact section when the "Contact Me" button is clicked
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});



// Lightbox Effect for Image Galleries
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        const lightboxImage = document.createElement('img');
        lightboxImage.src = item.src;
        lightbox.innerHTML = '';  // Clear any previous image
        lightbox.appendChild(lightboxImage);
    });
});

// Close lightbox when clicked outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Skills Fade-In Animation on Scroll
const skillItems = document.querySelectorAll('.skill-item');

const handleScroll = () => {
    const triggerPoint = window.innerHeight * 0.8;

    skillItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerPoint) {
            item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Scroll Animation for Work Timeline
const timelineItems = document.querySelectorAll('.timeline-content');

const handleWorkScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('active');
        }
    });
};

window.addEventListener('scroll', handleWorkScroll);
