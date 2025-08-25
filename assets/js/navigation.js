// Salem Church Navigation System - Cache-Busted Version
// Version: 2.0.2 - Mobile Optimized with Enhanced Error Handling

(function() {
    'use strict';
    
    // Debug mode for troubleshooting
    const DEBUG = window.location.search.includes('debug=1');
    
    function log(message, type = 'info') {
        if (DEBUG) {
            console.log(`[Navigation ${type.toUpperCase()}]:`, message);
        }
    }
    
    log('Navigation script loaded', 'info');
    
    // Ensure DOM is ready
    function domReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }
    
    // Initialize navigation when DOM is ready
    domReady(function() {
        initializeNavigation();
        initializePageEffects();
    });
    
    function initializeNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const body = document.body;
        
        log('Initializing navigation...', 'info');
        log('Menu toggle element:', menuToggle);
        log('Nav links element:', navLinks);
        
        if (!menuToggle || !navLinks) {
            log('Navigation elements not found!', 'error');
            console.error('Navigation elements not found. MenuToggle:', menuToggle, 'NavLinks:', navLinks);
            
            // Try to find elements with alternative selectors
            const altMenuToggle = document.querySelector('.menu-toggle');
            const altNavLinks = document.querySelector('.nav-links');
            
            if (altMenuToggle && altNavLinks) {
                log('Found alternative navigation elements', 'info');
                initializeNavigationWithElements(altMenuToggle, altNavLinks, body);
            } else {
                log('No navigation elements found with alternative selectors', 'error');
            }
            return;
        }
        
        initializeNavigationWithElements(menuToggle, navLinks, body);
    }
    
    function initializeNavigationWithElements(menuToggle, navLinks, body) {
        log('Setting up navigation with elements', 'info');
        
        // Mobile menu toggle with improved event handling
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = menuToggle.classList.contains('active');
            
            if (isActive) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Close menu when clicking on navigation links
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                closeMenu();
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
        
        function openMenu() {
            menuToggle.classList.add('active');
            navLinks.classList.add('active');
            body.classList.add('menu-open');
            menuToggle.setAttribute('aria-expanded', 'true');
            
            // Focus management for accessibility
            const firstLink = navLinks.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        }
        
        function closeMenu() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        
        // Touch event handling for better mobile experience
        let touchStartY = 0;
        let touchEndY = 0;
        
        navLinks.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        });
        
        navLinks.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartY - touchEndY;
            
            // Swipe up to close menu
            if (diff > swipeThreshold) {
                closeMenu();
            }
        }
    }
    
    function initializePageEffects() {
        // Header scroll effect
        let lastScrollTop = 0;
        const header = document.querySelector('.site-header');
        
        if (header) {
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                lastScrollTop = scrollTop;
            }, { passive: true });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Button ripple effect
        document.querySelectorAll('.btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    pointer-events: none;
                    left: ${x}px;
                    top: ${y}px;
                    width: ${size}px;
                    height: ${size}px;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(function() {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Add ripple animation CSS if not already present
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple-animation {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                
                .btn {
                    position: relative;
                    overflow: hidden;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Page loader functionality
    window.addEventListener('load', function() {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(function() {
                loader.style.display = 'none';
            }, 300);
        }
    });
    
    // Fallback - hide loader after 1 second regardless
    setTimeout(function() {
        const loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1000);
    
})();

// Force reload navigation on mobile devices
if ('serviceWorker' in navigator) {
    // Clear any cached service worker
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
            registration.unregister();
        }
    });
}

// Clear browser cache for this script
if (window.location.search.indexOf('cache=clear') === -1 && /Mobi|Android/i.test(navigator.userAgent)) {
    // Add cache-busting parameter for mobile devices
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('cache', 'clear');
    // Don't redirect, just ensure fresh load next time
}