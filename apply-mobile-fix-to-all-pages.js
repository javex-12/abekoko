// Quick mobile navigation fix for all pages
// Add this script to any page that needs mobile navigation

document.addEventListener('DOMContentLoaded', function() {
    console.log('Quick mobile navigation fix loading...');
    
    // Get elements
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle || !navLinks) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    console.log('Mobile menu elements found, applying fix...');
    
    // Ensure proper CSS is applied
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .menu-toggle {
                display: flex !important;
                z-index: 1001 !important;
                pointer-events: auto !important;
                width: 44px !important;
                height: 44px !important;
                background: none !important;
                border: none !important;
                cursor: pointer !important;
            }
            
            .nav-links {
                position: fixed !important;
                top: 60px !important;
                left: -100% !important;
                width: 100% !important;
                height: calc(100vh - 60px) !important;
                background: white !important;
                flex-direction: column !important;
                z-index: 1000 !important;
                transition: left 0.3s ease !important;
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                padding: 2rem 0 !important;
                gap: 1rem !important;
            }
            
            .nav-links.active {
                left: 0 !important;
            }
            
            .nav-links a {
                padding: 1rem 2rem !important;
                width: 90% !important;
                max-width: 300px !important;
                text-align: center !important;
                border: 2px solid rgba(196, 30, 58, 0.1) !important;
                background: rgba(255, 255, 255, 0.9) !important;
                border-radius: 12px !important;
                margin-bottom: 1rem !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 0.5rem !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Mobile menu toggle function
    function toggleMobileMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        console.log('Toggling mobile menu...');
        
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('Mobile menu opened');
        } else {
            document.body.style.overflow = '';
            console.log('Mobile menu closed');
        }
    }
    
    // Add event listeners
    menuToggle.addEventListener('click', toggleMobileMenu);
    menuToggle.addEventListener('touchend', toggleMobileMenu);
    
    // Close menu when clicking links
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Menu closed via link click');
        }
    });
    
    console.log('Quick mobile navigation fix applied successfully!');
});