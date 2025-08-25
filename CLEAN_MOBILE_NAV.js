/* ===== CLEAN MOBILE NAVIGATION JAVASCRIPT ===== */
/* Based on the working MOBILE_TEST.html */

console.log('🟢 Clean mobile navigation loading...');

// Wait for page to load
window.addEventListener('load', function() {
    console.log('🟢 Page loaded, initializing clean mobile navigation...');
    
    // Get elements
    const menuButton = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navLinks');
    
    console.log('🟢 Menu button found:', !!menuButton);
    console.log('🟢 Nav menu found:', !!navMenu);
    
    if (!menuButton || !navMenu) {
        console.log('❌ Clean nav: Menu elements not found');
        return;
    }
    
    // Simple toggle function (exactly like the test)
    function toggleMenu() {
        console.log('🟢 Clean nav: Toggle menu called');
        
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
            console.log('🟢 Clean nav: Menu closed');
        } else {
            // Open menu
            navMenu.classList.add('active');
            menuButton.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            console.log('🟢 Clean nav: Menu opened');
        }
    }
    
    // Remove any existing event listeners by cloning the button
    const newMenuButton = menuButton.cloneNode(true);
    menuButton.parentNode.replaceChild(newMenuButton, menuButton);
    
    // Add clean event listeners
    newMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🟢 Clean nav: Click event');
        toggleMenu();
    });
    
    newMenuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🟢 Clean nav: Touch event');
        toggleMenu();
    });
    
    // Close menu when clicking navigation links
    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('🟢 Clean nav: Link clicked, closing menu');
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
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active')) {
            if (!newMenuButton.contains(e.target) && !navMenu.contains(e.target)) {
                console.log('🟢 Clean nav: Clicked outside, closing menu');
                toggleMenu();
            }
        }
    });
    
    console.log('🟢 Clean mobile navigation setup complete!');
});

// Also try immediate setup
document.addEventListener('DOMContentLoaded', function() {
    console.log('🟢 DOM loaded, attempting clean nav setup...');
    setTimeout(function() {
        const event = new Event('load');
        window.dispatchEvent(event);
    }, 500);
});

console.log('🟢 Clean mobile navigation script loaded');