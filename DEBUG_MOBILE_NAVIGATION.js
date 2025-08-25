/* ===== DEBUG MOBILE NAVIGATION JAVASCRIPT ===== */
/* Super simple debug version with extensive logging */

console.log('🔴 DEBUG MOBILE NAVIGATION LOADING...');

// Wait for everything to load
window.addEventListener('load', function() {
    console.log('🔴 Window loaded, starting debug navigation...');
    
    // Find elements
    const menuButton = document.getElementById('menuToggle') || document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navLinks') || document.querySelector('.nav-links');
    
    console.log('🔴 Menu button found:', !!menuButton);
    console.log('🔴 Nav menu found:', !!navMenu);
    
    if (menuButton) {
        console.log('🔴 Menu button element:', menuButton);
        console.log('🔴 Menu button styles:', window.getComputedStyle(menuButton));
    }
    
    if (navMenu) {
        console.log('🔴 Nav menu element:', navMenu);
        console.log('🔴 Nav menu styles:', window.getComputedStyle(navMenu));
    }
    
    if (!menuButton || !navMenu) {
        console.log('❌ DEBUG: Menu elements not found!');
        alert('DEBUG: Menu elements not found! Check HTML structure.');
        return;
    }
    
    // Super simple toggle function
    function debugToggleMenu() {
        console.log('🔴 DEBUG TOGGLE CALLED!');
        
        const isActive = navMenu.classList.contains('active');
        console.log('🔴 Menu currently active:', isActive);
        
        if (isActive) {
            // Close menu
            navMenu.classList.remove('active');
            menuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            console.log('🔴 MENU CLOSED');
            alert('DEBUG: Menu closed!');
        } else {
            // Open menu
            navMenu.classList.add('active');
            menuButton.classList.add('active');
            document.body.classList.add('menu-open');
            console.log('🔴 MENU OPENED');
            alert('DEBUG: Menu opened!');
        }
        
        // Log final state
        console.log('🔴 Final menu classes:', navMenu.className);
        console.log('🔴 Final button classes:', menuButton.className);
        console.log('🔴 Final body classes:', document.body.className);
        
        // Log computed styles
        const menuStyles = window.getComputedStyle(navMenu);
        console.log('🔴 Menu left position:', menuStyles.left);
        console.log('🔴 Menu visibility:', menuStyles.visibility);
        console.log('🔴 Menu opacity:', menuStyles.opacity);
        console.log('🔴 Menu z-index:', menuStyles.zIndex);
    }
    
    // Remove any existing event listeners
    const newMenuButton = menuButton.cloneNode(true);
    menuButton.parentNode.replaceChild(newMenuButton, menuButton);
    
    // Add debug event listeners
    newMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔴 CLICK EVENT TRIGGERED');
        debugToggleMenu();
    });
    
    newMenuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔴 TOUCH EVENT TRIGGERED');
        debugToggleMenu();
    });
    
    // Test if button is clickable
    console.log('🔴 Button clickable test...');
    const buttonRect = newMenuButton.getBoundingClientRect();
    console.log('🔴 Button position:', buttonRect);
    console.log('🔴 Button visible:', buttonRect.width > 0 && buttonRect.height > 0);
    
    // Test if menu is positioned correctly
    const menuRect = navMenu.getBoundingClientRect();
    console.log('🔴 Menu position:', menuRect);
    
    console.log('🔴 DEBUG NAVIGATION SETUP COMPLETE!');
    alert('DEBUG: Navigation setup complete! Try tapping the red button.');
});

// Also try immediate setup
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔴 DOM loaded, attempting immediate setup...');
    setTimeout(function() {
        const event = new Event('load');
        window.dispatchEvent(event);
    }, 1000);
});

console.log('🔴 DEBUG MOBILE NAVIGATION SCRIPT LOADED');