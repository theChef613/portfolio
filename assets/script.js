// ===== Portfolio JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navContainer = document.querySelector('.nav-container');
                const navHeight = navContainer ? navContainer.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Mobile Navigation Toggle =====
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== Navbar Active State on Scroll =====
    const sections = document.querySelectorAll('section[id]');
    const navLinkElements = document.querySelectorAll('.nav-link[href^="#"]');

    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 100; // Offset for fixed navbar
        let activeId = null;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop - 200) {
                activeId = sectionId;
            }
        });
        
        navLinkElements.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            
            if (activeId) {
                const href = link.getAttribute('href');
                const hashIndex = href.indexOf('#');
                const targetId = hashIndex >= 0 ? href.slice(hashIndex) : '';
                if (targetId === `#${activeId}`) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
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

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            }
        });
    }

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
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey || e.ctrlKey) {
                // Ctrl+Shift+Tab shows focus outline for better accessibility
                document.body.style.outlineStyle = 'auto';
            }
        }
    });

    // ===== Initialize with nice animation timing =====
    setTimeout(() => {
        document.querySelector('.hero-name')?.classList.add('animate');
    }, 100);

});

// ===== Console Welcome Message (for developers) =====
console.log('%c🚀 Yaakov Schefres Portfolio', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('%cSystems Engineer & Space Vehicle Architect', 'color: #666; font-size: 12px;');
console.log('%cBuilt with ❤️ using semantic HTML, CSS Grid, and vanilla JavaScript', 'color: #666; font-size: 12px;');
