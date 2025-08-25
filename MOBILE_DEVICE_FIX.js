/* ===== MOBILE DEVICE SPECIFIC JAVASCRIPT FIX ===== */
/* This specifically targets mobile devices with touch events */

console.log('📱 MOBILE DEVICE FIX LOADING...');

// Detect if this is a mobile device
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    
    console.log('📱 Device detection:', {
        userAgent: userAgent.substring(0, 50) + '...',
        isMobile,
        isTouch,
        isSmallScreen,
        screenWidth: window.innerWidth
    });
    
    return isMobile || (isTouch && isSmallScreen);
}

// Mobile-specific navigation fix
function initMobileNavigation() {
    console.log('🔧 Initializing mobile navigation...');
    
    const menuButton = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navLinks');
    
    if (!menuButton || !navMenu) {
        console.log('❌ Menu elements not found');
        return;
    }
    
    console.log('✅ Menu elements found');
    
    // Add mobile-specific CSS class
    document.body.classList.add('mobile-device');
    
    // Mobile toggle function
    function toggleMobileMenu(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
        
        console.log('📱 MOBILE MENU TOGGLE TRIGGERED');
        
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            // Close menu
            navMenu.classList.remove('active');
            menuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
            console.log('❌ Mobile menu CLOSED');
        } else {
            // Open menu
            navMenu.classList.add('active');
            menuButton.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            console.log('✅ Mobile menu OPENED');
        }
        
        // Force a repaint
        navMenu.offsetHeight;
        
        console.log('Menu state:', {
            hasActiveClass: navMenu.classList.contains('active'),
            computedLeft: window.getComputedStyle(navMenu).left,
            visibility: window.getComputedStyle(navMenu).visibility
        });
    }
    
    // Remove any existing event listeners
    const newMenuButton = menuButton.cloneNode(true);
    menuButton.parentNode.replaceChild(newMenuButton, menuButton);
    
    // Add mobile-specific event listeners
    newMenuButton.addEventListener('touchstart', function(e) {
        console.log('👆 Touch start detected');
        e.preventDefault();
    }, { passive: false });
    
    newMenuButton.addEventListener('touchend', function(e) {
        console.log('👆 Touch end detected');
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu(e);
    }, { passive: false });
    
    newMenuButton.addEventListener('click', function(e) {
        console.log('👆 Click detected');
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu(e);
    });
    
    // Close menu when clicking navigation links
    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('🔗 Navigation link clicked, closing menu');
            navMenu.classList.remove('active');
            newMenuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('touchstart', function(e) {
        if (navMenu.classList.contains('active')) {
            if (!newMenuButton.contains(e.target) && !navMenu.contains(e.target)) {
                console.log('👆 Touched outside menu, closing');
                toggleMobileMenu();
            }
        }
    });
    
    console.log('🎉 Mobile navigation initialized successfully');
}

// Initialize based on device type
if (isMobileDevice()) {
    console.log('📱 Mobile device detected, applying mobile fixes');
    
    // Wait for DOM and then initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNavigation);
    } else {
        initMobileNavigation();
    }
    
    // Also try after a delay to ensure everything is loaded
    setTimeout(initMobileNavigation, 1000);
    setTimeout(initMobileNavigation, 2000);
} else {
    console.log('💻 Desktop device detected, skipping mobile fixes');
}

// Force initialization on window load
window.addEventListener('load', function() {
    if (isMobileDevice()) {
        console.log('📱 Window loaded, re-initializing mobile navigation');
        setTimeout(initMobileNavigation, 500);
    }
});