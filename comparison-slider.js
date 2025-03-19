// Animate elements on scroll
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(element => {
  observer.observe(element);
});

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for the down arrow
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const firstSection = document.querySelector('.section');
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Comparison functionality
const modal = document.getElementById('comparison-modal');
const closeBtn = document.querySelector('.close-modal');
const compareButtons = document.querySelectorAll('.compare-button');

compareButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('show');
    // Initialize the comparison when the modal opens
    initComparisons();
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Click outside to close
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

function initComparisons() {
  /* Find all elements with the class "img-comp-container": */
  const comparisons = document.getElementsByClassName("img-comp-container");
  
  for (let i = 0; i < comparisons.length; i++) {
    compareImages(comparisons[i]);
  }
  
  function compareImages(container) {
    let slider, img, width, height;
    /* Get the width and height of the container: */
    width = container.offsetWidth;
    height = container.offsetHeight;
    
    /* Set the width of the "before" image to 50%: */
    img = container.getElementsByClassName("img-comp-img")[1];
    img.style.width = "50%";
    
    /* Position the slider in the middle: */
    slider = container.getElementsByClassName("img-comp-slider")[0];
    slider.style.left = (width / 2) + "px";
    
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* Execute a function when the touch start event occurs (on mobile): */
    slider.addEventListener("touchstart", slideReady);
    
    /* Execute a function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Execute a function when the touch end event occurs (on mobile): */
    window.addEventListener("touchend", slideFinish);
    
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now active and ready to move: */
      document.addEventListener("mousemove", slideMove);
      document.addEventListener("touchmove", slideMove);
    }
    
    function slideFinish() {
      /* The slider is no longer active: */
      document.removeEventListener("mousemove", slideMove);
      document.removeEventListener("touchmove", slideMove);
    }
    
    function slideMove(e) {
      /* Get the cursor's x position: */
      let pos = getCursorPos(e);
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > width) pos = width;
      /* Resize the "before" image: */
      img.style.width = pos + "px";
      /* Position the slider: */
      slider.style.left = pos + "px";
    }
    
    function getCursorPos(e) {
      let a, x = 0;
      e = e || window.event;
      /* Get the x positions of the image: */
      a = container.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
  }
}

// Responsive Device Showcase Controls
const deviceButtons = document.querySelectorAll('.device-button');
const deviceShowcase = document.querySelector('.device-showcase');

deviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    deviceButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Get device type
    const deviceType = button.getAttribute('data-device');
    
    // Remove all focus classes
    deviceShowcase.classList.remove('desktop-focus', 'tablet-focus', 'mobile-focus');
    
    // Add appropriate focus class
    deviceShowcase.classList.add(`${deviceType}-focus`);
  });
});

// Initially set to desktop focus
deviceShowcase.classList.add('desktop-focus');

// Initialize comparison on page load
document.addEventListener('DOMContentLoaded', initComparisons);
