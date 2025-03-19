// Hero header transformation on scroll
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const heroHeader = document.querySelector('.hero-header');
        if (window.scrollY > 100) {
            heroHeader.classList.add('scrolled');
        } else {
            heroHeader.classList.remove('scrolled');
        }
    });
});




// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Form submission event (for demonstration)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real scenario, you would send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! This is a demonstration as the form is not connected to a server.');
        
        // Reset the form
        this.reset();
    });
}

// Add a simple animation to reveal elements as they scroll into view
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize the page with a fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
});


// JavaScript for Collapsible CV Sections
document.addEventListener('DOMContentLoaded', function() {
    // Get all collapsible headers
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
    
    // Add click event to each header
    collapsibleHeaders.forEach(header => {
        // Set initial state - first one open, others closed
        const content = header.nextElementSibling;
        
        // If it's the first header in its section, open it by default
        if (header === header.parentElement.querySelector('.collapsible-header')) {
            header.classList.add('active');
            content.classList.add('open');
        }
        
        // Add click event
        header.addEventListener('click', function() {
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle open class on content
            const content = this.nextElementSibling;
            content.classList.toggle('open');
        });
    });
});
