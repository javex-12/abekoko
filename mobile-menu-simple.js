// Simple mobile menu fix - inline version
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle || !navLinks) {
        console.log('Menu elements not found');
        return;
    }
    
    console.log('Menu elements found, setting up...');
    
    // Simple toggle function
    function toggleMenu() {
        console.log('Toggling menu...');
        
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
            console.log('Menu closed');
        } else {
            navLinks.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
            console.log('Menu opened');
        }
    }
    
    // Add event listeners
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    menuToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Close menu when clicking links
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    console.log('Mobile menu setup complete');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}