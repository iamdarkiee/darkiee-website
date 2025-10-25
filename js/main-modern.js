/**
 * DARKIEE - Modern Website JavaScript
 * Interactive features, animations, and utilities
 */

(function() {
    'use strict';

    // ================================
    // DOM Elements
    // ================================
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    const themeToggle = document.getElementById('themeToggle');
    const scrollTop = document.getElementById('scrollTop');
    const navLinks = document.querySelectorAll('.nav-link');

    // ================================
    // Navbar Scroll Effect
    // ================================
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        if (currentScroll > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
        
        lastScroll = currentScroll;
    });

    // ================================
    // Mobile Menu Toggle
    // ================================
    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // Active Navigation Link
    // ================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);

    // ================================
    // Dark/Light Theme Toggle
    // ================================
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') || (prefersDark.matches ? 'dark' : 'light');
    
    // Set initial theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // ================================
    // Scroll to Top Button
    // ================================
    scrollTop?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ================================
    // Intersection Observer for Animations
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.service-card, .pillar-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ================================
    // Parallax Effect for Hero Background
    // ================================
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBg.style.transform = `translateY(${parallax}px)`;
        });
    }

    // ================================
    // Floating Cards Animation
    // ================================
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Random subtle movement
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 10;
            const randomY = (Math.random() - 0.5) * 10;
            card.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 3000 + (index * 500));
    });

    // ================================
    // Form Validation (if contact form exists)
    // ================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(data.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // ================================
    // Utility Functions
    // ================================
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles if not already added
        if (!document.getElementById('notification-styles')) {
            const notificationStyles = document.createElement('style');
            notificationStyles.id = 'notification-styles';
            notificationStyles.textContent = `
                .notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    background: var(--color-surface);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-md);
                    box-shadow: var(--shadow-xl);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    z-index: 9999;
                    animation: slideIn 0.3s ease-out;
                }
                
                .notification-success {
                    border-left: 4px solid var(--color-success);
                }
                
                .notification-error {
                    border-left: 4px solid var(--color-error);
                }
                
                .notification-info {
                    border-left: 4px solid var(--color-primary);
                }
                
                .notification i {
                    font-size: 1.25rem;
                }
                
                .notification-success i {
                    color: var(--color-success);
                }
                
                .notification-error i {
                    color: var(--color-error);
                }
                
                .notification-info i {
                    color: var(--color-primary);
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(notificationStyles);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // ================================
    // Lazy Loading Images
    // ================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ================================
    // Performance Monitoring
    // ================================
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.duration > 100) {
                    console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
                }
            });
        });
        
        perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
    }

    // ================================
    // Page Load Complete
    // ================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Add loaded class for animations
        const loadedStyles = document.createElement('style');
        loadedStyles.textContent = `
            body.loaded .hero-content {
                animation: fadeInUp 1s ease-out;
            }
        `;
        document.head.appendChild(loadedStyles);
    });

    // ================================
    // Console Branding
    // ================================
    console.log('%c🌙 Darkiee - Built with Innovation', 
        'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%); -webkit-background-clip: text; color: transparent;');
    console.log('%cInterested in working with us? Visit https://darkiee.com/careers', 
        'font-size: 14px; color: #6366F1;');

})();
