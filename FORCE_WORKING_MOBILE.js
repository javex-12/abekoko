/* ===== FORCE WORKING MOBILE NAVIGATION ===== */
/* This completely overrides all other JavaScript and forces the working mobile navigation */

console.log('🔴 FORCE WORKING MOBILE NAVIGATION LOADING...');

// Override all other scripts
window.addEventListener('load', function() {
    console.log('🔴 FORCE: Page loaded, applying working mobile navigation...');
    
    // Find elements with multiple selectors
    const menuButton = document.getElementById('menuToggle') || 
                      document.querySelector('.menu-toggle') ||
                      document.querySelector('button[id="menuToggle"]');
                      
    const navMenu = document.getElementById('navLinks') || 
                   document.querySelector('.nav-links') ||
                   document.querySelector('ul.nav-links');
    
    console.log('🔴 FORCE: Menu button found:', !!menuButton);
    console.log('🔴 FORCE: Nav menu found:', !!navMenu);
    
    if (!menuButton || !navMenu) {
        console.log('❌ FORCE: Menu elements not found!');
        alert('FORCE ERROR: Menu elements not found!');
        return;
    }
    
    // Remove ALL existing event listeners by replacing elements
    const newMenuButton = menuButton.cloneNode(true);
    menuButton.parentNode.replaceChild(newMenuButton, menuButton);
    
    // Simple working toggle function (exactly like test)
    function forceToggleMenu() {
        console.log('🔴 FORCE: Toggle menu called');
        
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            // Close menu
            navMenu.classList.remove('active');
            newMenuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
            console.log('🔴 FORCE: Menu CLOSED');
            alert('FORCE: Menu closed!');
        } else {
            // Open menu
            navMenu.classList.add('active');
            newMenuButton.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            console.log('🔴 FORCE: Menu OPENED');
            alert('FORCE: Menu opened!');
        }
        
        // Log final state
        console.log('🔴 FORCE: Final classes:', {
            menuButton: newMenuButton.className,
            navMenu: navMenu.className,
            body: document.body.className
        });
    }
    
    // Add working event listeners
    newMenuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔴 FORCE: Click event triggered');
        forceToggleMenu();
    });
    
    newMenuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔴 FORCE: Touch event triggered');
        forceToggleMenu();
    });
    
    // Close menu when clicking links
    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            console.log('🔴 FORCE: Link clicked, closing menu');
            navMenu.classList.remove('active');
            newMenuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
        }
    });
    
    console.log('🔴 FORCE: Working mobile navigation setup complete!');
    alert('FORCE: Mobile navigation ready! Look for pulsing red button.');
});

// Also try immediate setup
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔴 FORCE: DOM loaded, attempting setup...');
    setTimeout(function() {
        const event = new Event('load');
        window.dispatchEvent(event);
    }, 1000);
});

// Force setup after delay
setTimeout(function() {
    console.log('🔴 FORCE: Delayed setup attempt...');
    const event = new Event('load');
    window.dispatchEvent(event);
}, 2000);

console.log('🔴 FORCE WORKING MOBILE NAVIGATION SCRIPT LOADED');