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
