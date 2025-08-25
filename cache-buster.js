/* ===== CACHE BUSTER SCRIPT ===== */
/* Ensures CSS and assets load properly without hard refresh */

(function() {
    'use strict';
    
    // Add cache-busting version to all CSS links
    function addCacheBusting() {
        const version = '2025-' + Date.now();
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        
        cssLinks.forEach(function(link) {
            const href = link.getAttribute('href');
            if (href && !href.includes('?v=') && !href.includes('http')) {
                link.setAttribute('href', href + '?v=' + version);
            }
        });
    }
    
    // Force reload critical CSS if not loaded
    function ensureCSSLoaded() {
        // Check if main CSS variables are available
        const testElement = document.createElement('div');
        testElement.style.color = 'var(--primary-color)';
        document.body.appendChild(testElement);
        
        const computedColor = window.getComputedStyle(testElement).color;
        document.body.removeChild(testElement);
        
        // If CSS variables not loaded, force reload
        if (computedColor === 'var(--primary-color)' || computedColor === '') {
            console.log('CSS not fully loaded, forcing reload...');
            location.reload(true);
        }
    }
    
    // Run when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addCacheBusting();
            setTimeout(ensureCSSLoaded, 1000);
        });
    } else {
        addCacheBusting();
        setTimeout(ensureCSSLoaded, 1000);
    }
    
    // Add service worker to handle caching
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful');
            }).catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
        });
    }
})();