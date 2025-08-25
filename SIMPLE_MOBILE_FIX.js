// EMERGENCY MOBILE NAVIGATION FIX - SUPER SIMPLE VERSION
// This should work on any page

console.log('🔧 EMERGENCY MOBILE FIX LOADING...');

// Wait for page to load
window.addEventListener('load', function() {
    console.log('📱 Page loaded, applying mobile fix...');
    
    // Find the menu elements
    const menuButton = document.querySelector('#menuToggle') || document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#navLinks') || document.querySelector('.nav-links');
    
    console.log('🔍 Menu button found:', !!menuButton);
    console.log('🔍 Nav menu found:', !!navMenu);
    
    if (!menuButton || !navMenu) {
        console.log('❌ Menu elements not found!');
        return;
    }
    
    // Add emergency CSS
    const emergencyCSS = document.createElement('style');
    emergencyCSS.innerHTML = `
        @media (max-width: 768px) {
            .menu-toggle, #menuToggle {
                display: flex !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                width: 40px !important;
                height: 40px !important;
                background: none !important;
                border: none !important;
                cursor: pointer !important;
                z-index: 1001 !important;
                position: relative !important;
            }
            
            .nav-links, #navLinks {
                position: fixed !important;
                top: 60px !important;
                left: -100% !important;
                width: 100% !important;
                height: calc(100vh - 60px) !important;
                background: white !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: flex-start !important;
                padding: 50px 20px !important;
                transition: left 0.3s ease !important;
                z-index: 1000 !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2) !important;
            }
            
            .nav-links.active, #navLinks.active {
                left: 0 !important;
            }
            
            .nav-links a, #navLinks a {
                width: 90% !important;
                max-width: 300px !important;
                text-align: center !important;
                padding: 15px 20px !important;
                margin: 10px 0 !important;
                border: 2px solid #c41e3a !important;
                border-radius: 10px !important;
                background: #f9f9f9 !important;
                color: #333 !important;
                text-decoration: none !important;
                display: block !important;
            }
        }
    `;
    document.head.appendChild(emergencyCSS);
    console.log('✅ Emergency CSS added');
    
    // Simple toggle function
    function toggleMenu() {
        console.log('🔄 Toggling menu...');
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            console.log('❌ Menu closed');
        } else {
            navMenu.classList.add('active');
            console.log('✅ Menu opened');
        }
    }
    
    // Add click event
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('👆 Menu button clicked');
        toggleMenu();
    });
    
    // Add touch event for mobile
    menuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('👆 Menu button touched');
        toggleMenu();
    });
    
    // Close menu when clicking links
    navMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navMenu.classList.remove('active');
            console.log('🔗 Menu closed via link click');
        }
    });
    
    console.log('🎉 EMERGENCY MOBILE FIX APPLIED SUCCESSFULLY!');
});

console.log('🚀 Emergency mobile fix script loaded');