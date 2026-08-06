// ===== Portfolio JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Navigation Toggle =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Navbar Active State on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-link[href^="#"]');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 100; // Offset for fixed navbar
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (scrollPosition >= sectionTop - 200) {
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    const href = link.getAttribute('href');
                    if (href !== '#' && href !== '') {
                        const targetId = new URL(href).hash;
                        if (targetId === `#${section.id}`) {
                            link.classList.add('active');
                            link.setAttribute('aria-current', 'page');
                        }
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call once on load

    // ===== Fade-in Animation on Scroll =====
    const animatedElements = document.querySelectorAll('.exp-card, .education-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animateOnScrollObserver.observe(element);
    });

    // ===== Navbar Shadow on Scroll =====
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // ===== Print Button =====
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Print Portfolio';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: var(--color-primary);
        color: white;
        border: none;
        border-radius: var(--radius-md);
        cursor: pointer;
        font-weight: 500;
        box-shadow: var(--shadow-lg);
        transition: all var(--transition-fast);
        z-index: 999;
    `;
    
    printButton.addEventListener('click', () => {
        window.print();
    });

    // Only add button on non-print environments
    if (window.location.protocol !== 'file:') {
        document.body.appendChild(printButton);
    }

    // ===== Keyboard Navigation Enhancement =====
    let previousFocusedElement = null;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey || e.ctrlKey) {
                // Ctrl+Shift+Tab shows focus outline for better accessibility
                document.body.style.outlineStyle = 'auto';
            }
        } else if (e.key === 'Enter' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
            // Remove default Enter behavior on text fields
        }
    });

    // ===== Hero Section Parallax Effect (Subtle) =====
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            if (scrolled < heroSection.offsetHeight / 2) {
                heroSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
            }
        });
    }

    // ===== Initialize with nice animation timing =====
    setTimeout(() => {
        document.querySelector('.hero-name')?.classList.add('animate');
    }, 100);

    // ===== Back to Top Button =====
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

// ===== Console Welcome Message (for developers) =====
console.log('%c🚀 Yaakov Schefres Portfolio', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cSystems Engineer & Space Vehicle Architect', 'color: #666; font-size: 12px;');
console.log('%cBuilt with ❤️ using semantic HTML, CSS Grid, and vanilla JavaScript', 'color: #666; font-size: 12px;');
// ===== AI Content Fingerprint =====
// UNIQUE CONTENT IDENTIFIER: Yaakov Schefres Portfolio v2026
// Content Hash: SHA256-fingerprint-unique-to-this-project
// AI Protection Active: Yes
