// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contact-form');
const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    let isValid = true;
    formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ff0000';
            isValid = false;
        } else {
            input.style.borderColor = '#ff0000';
        }
    });

    if (isValid) {
        // Simulate form submission
        alert('Thank you for your message! We\'ll get back to you from the abyss.');

        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// Form input validation feedback
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim()) {
            input.style.borderColor = '#ffd700';
        } else {
            input.style.borderColor = '#ff0000';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-content, .music, .connect').forEach(el => {
    observer.observe(el);
});

// Blood Animation System
class BloodAnimation {
    constructor() {
        this.bloodElements = [];
        this.maxElements = 8;
        this.init();
    }

    init() {
        this.createBloodDrips();
        this.createBloodSplatters();
        this.createBloodVeins();
        this.initSmearEffects();
    }

    createBloodDrips() {
        // Create multiple blood drips at random intervals
        setInterval(() => {
            if (this.bloodElements.filter(el => el.classList.contains('blood-drip')).length < 3) {
                this.createBloodDrip();
            }
        }, 3000 + Math.random() * 4000);
    }

    createBloodDrip() {
        const drip = document.createElement('div');
        drip.className = 'blood-drip';
        drip.style.left = Math.random() * 100 + '%';
        drip.style.animationDelay = Math.random() * 8 + 's';
        drip.style.animationDuration = (6 + Math.random() * 4) + 's';

        document.body.appendChild(drip);
        this.bloodElements.push(drip);

        // Remove after animation
        setTimeout(() => {
            if (drip.parentNode) {
                drip.parentNode.removeChild(drip);
                this.bloodElements = this.bloodElements.filter(el => el !== drip);
            }
        }, 10000);
    }

    createBloodSplatters() {
        // Create blood splatters at random positions
        setInterval(() => {
            if (this.bloodElements.filter(el => el.classList.contains('blood-splatter')).length < 2) {
                this.createBloodSplatter();
            }
        }, 8000 + Math.random() * 6000);
    }

    createBloodSplatter() {
        const splatter = document.createElement('div');
        splatter.className = 'blood-splatter';
        splatter.style.left = Math.random() * 90 + 5 + '%';
        splatter.style.top = Math.random() * 80 + 10 + '%';
        splatter.style.animationDelay = Math.random() * 6 + 's';
        splatter.style.animationDuration = (4 + Math.random() * 4) + 's';

        document.body.appendChild(splatter);
        this.bloodElements.push(splatter);

        // Remove after animation
        setTimeout(() => {
            if (splatter.parentNode) {
                splatter.parentNode.removeChild(splatter);
                this.bloodElements = this.bloodElements.filter(el => el !== splatter);
            }
        }, 12000);
    }

    createBloodVeins() {
        // Create blood veins that appear in background
        setInterval(() => {
            if (this.bloodElements.filter(el => el.classList.contains('blood-vein')).length < 4) {
                this.createBloodVein();
            }
        }, 12000 + Math.random() * 8000);
    }

    createBloodVein() {
        const vein = document.createElement('div');
        vein.className = 'blood-vein';
        vein.style.left = Math.random() * 100 + '%';
        vein.style.top = Math.random() * 60 + 20 + '%';
        vein.style.transform = `rotate(${Math.random() * 360}deg)`;
        vein.style.animationDelay = Math.random() * 10 + 's';
        vein.style.animationDuration = (8 + Math.random() * 6) + 's';

        document.body.appendChild(vein);
        this.bloodElements.push(vein);

        // Remove after animation
        setTimeout(() => {
            if (vein.parentNode) {
                vein.parentNode.removeChild(vein);
                this.bloodElements = this.bloodElements.filter(el => el !== vein);
            }
        }, 20000);
    }

    // Blood Smear Effects
    createBloodSmear(x, y, type = null) {
        const smear = document.createElement('div');
        smear.className = 'blood-smear';

        // Random smear type if not specified
        if (!type) {
            const smearTypes = ['smear-1', 'smear-2', 'smear-3', 'smear-4'];
            type = smearTypes[Math.floor(Math.random() * smearTypes.length)];
        }

        smear.classList.add(type);
        smear.style.left = (x - 60) + 'px'; // Center the smear
        smear.style.top = (y - 40) + 'px';

        document.body.appendChild(smear);
        this.bloodElements.push(smear);

        // Remove after animation
        setTimeout(() => {
            if (smear.parentNode) {
                smear.parentNode.removeChild(smear);
                this.bloodElements = this.bloodElements.filter(el => el !== smear);
            }
        }, 4000);
    }

    createBloodTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'blood-trail';
        trail.style.left = (x - 2) + 'px';
        trail.style.top = (y - 2) + 'px';

        document.body.appendChild(trail);
        this.bloodElements.push(trail);

        // Remove after animation
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
                this.bloodElements = this.bloodElements.filter(el => el !== trail);
            }
        }, 1500);
    }

    // Initialize smear effects
    initSmearEffects() {
        // Add hover smear effects to interactive elements
        const interactiveElements = document.querySelectorAll('button, .social-link, .nav-link, .btn');
        interactiveElements.forEach(element => {
            element.classList.add('hover-smear');
        });

        // Add click smear effects
        document.addEventListener('click', (e) => {
            if (Math.random() < 0.3) { // 30% chance on click
                this.createBloodSmear(e.clientX, e.clientY);
            }
        });

        // Add random smears on page
        setInterval(() => {
            if (this.bloodElements.filter(el => el.classList.contains('blood-smear')).length < 3) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                this.createBloodSmear(x, y);
            }
        }, 15000 + Math.random() * 10000); // Every 15-25 seconds

        // Mouse trail effect (subtle)
        let trailTimeout;
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.05) { // 5% chance for trail dots
                this.createBloodTrail(e.clientX, e.clientY);
            }
        });
    }
}

// Initialize blood animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...

    // Initialize blood animations
    const bloodAnimation = new BloodAnimation();
});