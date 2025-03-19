// Smooth scrolling for navigation links
document.querySelectorAll('header a, .cta-btn, .footer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add animations as elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate floating elements when skills section is in view
            if (entry.target.classList.contains('skills-container')) {
                const floatingElements = document.querySelectorAll('.floating-element');
                floatingElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 300);
                });
            }
        }
    });
}, { threshold: 0.1 });

// Apply animations to section elements
document.querySelectorAll('.section-title, .project-card, .about-content, .skills-container, .skills-intro, .skill-card, .contact-info, .contact-form, .footer-nav').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demonstration as the form is not connected to a server.');
        this.reset();
    });
}
