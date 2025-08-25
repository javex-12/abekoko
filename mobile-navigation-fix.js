/* ===== MOBILE NAVIGATION JAVASCRIPT FIX ===== */
/* Comprehensive mobile navigation functionality */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile navigation script loaded');
    
    // Get navigation elements
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const header = document.getElementById('header');
    
    // Check if elements exist
    if (!menuToggle) {
        console.error('Menu toggle button not found');
        return;
    }
    
    if (!navLinks) {
        console.error('Navigation links not found');
        return;
    }
    
    console.log('Navigation elements found successfully');
    
    // Mobile menu toggle function
    function toggleMobileMenu() {
        console.log('Toggle mobile menu clicked');
        
        // Toggle active class on menu button
        menuToggle.classList.toggle('active');
        
        // Toggle active class on navigation
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('Mobile menu opened');
        } else {
            document.body.style.overflow = '';
            console.log('Mobile menu closed');
        }
    }
    
    // Close mobile menu function
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Add click event listener to menu toggle
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Add touch event listener for better mobile support
    menuToggle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
    
    menuToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Close menu when clicking on navigation links
    if (navLinks) {
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                console.log('Navigation link clicked, closing menu');
                closeMobileMenu();
            });
            
            // Add touch support for navigation links
            link.addEventListener('touchend', function() {
                console.log('Navigation link touched, closing menu');
                setTimeout(closeMobileMenu, 100); // Small delay to ensure link click registers
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active')) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                console.log('Clicked outside menu, closing');
                closeMobileMenu();
            }
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            console.log('Escape key pressed, closing menu');
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            console.log('Window resized to desktop, closing mobile menu');
            closeMobileMenu();
        }
    });
    
    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Ensure menu button is always visible and clickable
    function ensureMenuButtonWorking() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'flex';
            menuToggle.style.pointerEvents = 'auto';
            menuToggle.style.zIndex = '1001';
            
            // Make sure navigation is properly positioned
            navLinks.style.position = 'fixed';
            navLinks.style.zIndex = '1000';
        }
    }
    
    // Run on load and resize
    ensureMenuButtonWorking();
    window.addEventListener('resize', ensureMenuButtonWorking);
    
    console.log('Mobile navigation setup complete');
});

// Fallback for older browsers
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Fallback: DOM loaded');
    });
} else {
    console.log('DOM already loaded, running mobile navigation setup');
    // Run the setup immediately if DOM is already loaded
    setTimeout(function() {
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    }, 100);
}