// ===== SALEM CHURCH LOADING SCREEN SCRIPT =====

(function() {
    'use strict';
    
    // Configuration
    const LOADING_DURATION = 3000; // 3 seconds for first visit
    const QUICK_LOADING_DURATION = 1000; // 1 second for subsequent pages
    const FADE_OUT_DURATION = 800; // 0.8 seconds
    
    // Session storage keys
    const FIRST_VISIT_KEY = 'salem_church_first_visit';
    const LAST_PAGE_KEY = 'salem_church_last_page';
    
    // Check if this is the first visit
    function isFirstVisit() {
        const hasVisited = sessionStorage.getItem(FIRST_VISIT_KEY);
        const currentPage = window.location.pathname;
        const lastPage = sessionStorage.getItem(LAST_PAGE_KEY);
        
        // Mark as visited
        sessionStorage.setItem(FIRST_VISIT_KEY, 'true');
        sessionStorage.setItem(LAST_PAGE_KEY, currentPage);
        
        // First visit if no previous visit or coming from external site
        return !hasVisited || (document.referrer && !document.referrer.includes(window.location.hostname));
    }
    
    // Detect correct image path based on current page location
    function getImagePath() {
        const currentPath = window.location.pathname;
        const isInPagesFolder = currentPath.includes('/pages/');
        return isInPagesFolder ? '../assets/images/gallery/' : 'assets/images/gallery/';
    }
    
    // Create quick loading screen for subsequent pages
    function createQuickLoadingScreen() {
        const imagePath = getImagePath();
        const loadingHTML = `
            <div id="loadingScreen" class="loading-screen quick-loading">
                <!-- Simple Logo -->
                <div class="loading-logo-quick">
                    <img src="${imagePath}logo.jpg" alt="Salem Church Logo" onload="this.classList.add('loaded')" onerror="handleLogoError(this, '${imagePath}')">
                </div>
                
                <!-- Simple Text -->
                <p class="loading-text-quick">Loading...</p>
            </div>
        `;
        
        // Insert loading screen
        document.body.insertAdjacentHTML('afterbegin', loadingHTML);
        
        // Add error handling
        window.handleLogoError = function(img, imagePath) {
            const logoContainer = img.parentElement;
            if (logoContainer) {
                logoContainer.innerHTML = `
                    <div class="loading-logo-fallback-quick">
                        ⛪
                    </div>
                `;
            }
        };
    }
    
    // Create full loading screen for first visit
    function createFullLoadingScreen() {
        const imagePath = getImagePath();
        console.log('🖼️ Loading screen image path:', imagePath);
        console.log('🖼️ Full logo path:', imagePath + 'logo.jpg');
        
        const loadingHTML = `
            <div id="loadingScreen" class="loading-screen">
                <!-- Floating Particles -->
                <div class="loading-particles">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
                
                <!-- Church Logo -->
                <div class="loading-logo" id="loadingLogo">
                    <img src="${imagePath}logo.jpg" alt="Salem Church Logo" onload="this.classList.add('loaded'); console.log('✅ Logo loaded successfully!')" onerror="handleLogoError(this, '${imagePath}')">
                </div>
                
                <!-- Church Name -->
                <h1 class="loading-title">Salem African Church</h1>
                
                <!-- Church Motto -->
                <p class="loading-motto">"Stay Updated • Stay Blessed"</p>
                
                <!-- Cross Symbol -->
                <div class="loading-cross"></div>
                
                <!-- Loading Dots -->
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
                
                <!-- Loading Text -->
                <p class="loading-text">Loading...</p>
                
                <!-- Blessing Text -->
                <p class="blessing-text">May God's blessings be upon you</p>
            </div>
        `;
        
        // Insert loading screen at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', loadingHTML);
        
        // Add logo error handling function to global scope
        window.handleLogoError = function(img, imagePath) {
            console.log('❌ Logo failed to load:', img.src);
            console.log('🔄 Trying fallback...');
            
            // Try SVG fallback first
            if (!img.src.includes('church-icon.svg')) {
                console.log('🔄 Trying SVG fallback...');
                img.src = imagePath + 'church-icon.svg';
                img.style.filter = 'brightness(0) invert(1)';
                img.onload = function() {
                    this.classList.add('loaded');
                    console.log('✅ SVG fallback loaded!');
                };
                img.onerror = function() {
                    console.log('❌ SVG also failed, using text fallback');
                    createTextFallback();
                };
                return;
            }
            
            // If SVG also fails, create text-based fallback
            createTextFallback();
            
            function createTextFallback() {
                console.log('🔄 Using text fallback...');
                const logoContainer = document.getElementById('loadingLogo');
                if (logoContainer) {
                    logoContainer.innerHTML = `
                        <div class="loading-logo-fallback">
                            <div class="fallback-text">SALEM</div>
                        </div>
                    `;
                    logoContainer.className = '';
                    console.log('✅ Text fallback created!');
                }
            }
        };
    }
    
    // Hide loading screen with animation
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            // Add fade-out class
            loadingScreen.classList.add('fade-out');
            
            // Remove from DOM after animation
            setTimeout(() => {
                if (loadingScreen && loadingScreen.parentNode) {
                    loadingScreen.parentNode.removeChild(loadingScreen);
                }
                
                // Enable scrolling
                document.body.style.overflow = '';
                
                // Trigger custom event for other scripts
                window.dispatchEvent(new CustomEvent('loadingComplete'));
                
                console.log('✅ Salem Church loading screen completed');
            }, FADE_OUT_DURATION);
        }
    }
    
    // Initialize loading screen based on visit type
    function initLoadingScreen() {
        const firstVisit = isFirstVisit();
        
        // Prevent scrolling during loading
        document.body.style.overflow = 'hidden';
        
        if (firstVisit) {
            // Full loading screen for first visit
            createFullLoadingScreen();
            console.log('🎨 Salem Church - First visit: Full loading screen');
            
            // Set timer to hide loading screen
            setTimeout(hideLoadingScreen, LOADING_DURATION);
            
            // Also hide on window load (whichever comes first)
            window.addEventListener('load', () => {
                setTimeout(hideLoadingScreen, Math.min(1000, LOADING_DURATION));
            });
            
            // Initialize all the fancy features for first visit
            trackLoadingProgress();
            rotateInspirationalQuotes();
        } else {
            // Quick loading screen for subsequent pages
            createQuickLoadingScreen();
            console.log('🚀 Salem Church - Return visit: Quick loading screen');
            
            // Much shorter duration for subsequent visits
            setTimeout(hideLoadingScreen, QUICK_LOADING_DURATION);
            
            // Also hide on window load (whichever comes first)
            window.addEventListener('load', () => {
                setTimeout(hideLoadingScreen, Math.min(500, QUICK_LOADING_DURATION));
            });
        }
    }
    
    // Enhanced loading with progress tracking
    function trackLoadingProgress() {
        const imagePath = getImagePath();
        const resources = [
            'assets/css/main.css',
            'assets/css/mobile-nav-fix.css',
            'assets/js/navigation.js',
            imagePath + 'logo.jpg',
            imagePath + 'churchpic.png'
        ];
        
        let loadedCount = 0;
        const totalResources = resources.length;
        
        // Update loading text based on progress
        function updateLoadingText() {
            const loadingText = document.querySelector('.loading-text');
            if (loadingText) {
                const percentage = Math.round((loadedCount / totalResources) * 100);
                
                if (percentage < 30) {
                    loadingText.textContent = 'Preparing worship...';
                } else if (percentage < 60) {
                    loadingText.textContent = 'Loading blessings...';
                } else if (percentage < 90) {
                    loadingText.textContent = 'Almost ready...';
                } else {
                    loadingText.textContent = 'Welcome!';
                }
            }
        }
        
        // Check if resources are loaded
        resources.forEach(resource => {
            if (resource.endsWith('.css')) {
                // Check CSS
                const link = document.querySelector(`link[href*="${resource}"]`);
                if (link) {
                    link.addEventListener('load', () => {
                        loadedCount++;
                        updateLoadingText();
                    });
                }
            } else if (resource.endsWith('.js')) {
                // Check JS
                const script = document.querySelector(`script[src*="${resource}"]`);
                if (script) {
                    script.addEventListener('load', () => {
                        loadedCount++;
                        updateLoadingText();
                    });
                }
            } else {
                // Check images
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    updateLoadingText();
                };
                img.onerror = () => {
                    // Still count as "loaded" even if failed
                    loadedCount++;
                    updateLoadingText();
                };
                img.src = resource;
            }
        });
        
        // Update initially
        setTimeout(updateLoadingText, 500);
    }
    
    // Add inspirational quotes rotation
    function rotateInspirationalQuotes() {
        const quotes = [
            "May God's blessings be upon you",
            "Welcome to our church family",
            "Faith, Hope, and Love await you",
            "God's grace is sufficient",
            "You are wonderfully made",
            "His mercies are new every morning",
            "Walk by faith, not by sight",
            "God has great plans for you"
        ];
        
        let currentQuote = 0;
        
        function updateQuote() {
            const blessingText = document.querySelector('.blessing-text');
            if (blessingText) {
                blessingText.style.opacity = '0';
                
                setTimeout(() => {
                    blessingText.textContent = quotes[currentQuote];
                    blessingText.style.opacity = '1';
                    currentQuote = (currentQuote + 1) % quotes.length;
                }, 300);
            }
        }
        
        // Start quote rotation after initial display
        setTimeout(() => {
            const interval = setInterval(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                if (!loadingScreen) {
                    clearInterval(interval);
                    return;
                }
                updateQuote();
            }, 1000);
        }, 2500);
    }
    
    // Mobile-specific optimizations
    function mobileOptimizations() {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Reduce animation complexity on mobile
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    .loading-particles { display: none; }
                    .loading-logo { animation-duration: 3s; }
                    .loading-cross { animation-duration: 1.5s; }
                }
            `;
            document.head.appendChild(style);
            
            // Faster loading on mobile
            setTimeout(hideLoadingScreen, Math.min(LOADING_DURATION, 2500));
        }
    }
    
    // Accessibility enhancements
    function accessibilityEnhancements() {
        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Shorter loading time for users who prefer reduced motion
            setTimeout(hideLoadingScreen, 1000);
        }
        
        // Add ARIA labels
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                loadingScreen.setAttribute('aria-label', 'Loading Salem African Church website');
                loadingScreen.setAttribute('role', 'status');
                loadingScreen.setAttribute('aria-live', 'polite');
            }
        }, 100);
    }
    
    // Error handling
    function errorHandling() {
        // Fallback: Always hide loading screen after maximum time
        setTimeout(() => {
            const loadingScreen = document.getElementById('loadingScreen');
            if (loadingScreen) {
                console.warn('⚠️ Loading screen timeout - forcing hide');
                hideLoadingScreen();
            }
        }, 5000); // 5 second maximum
        
        // Handle errors gracefully
        window.addEventListener('error', (e) => {
            console.warn('⚠️ Error during loading:', e.error);
            // Still hide loading screen on errors
            setTimeout(hideLoadingScreen, 1000);
        });
    }
    
    // Check if current page is homepage
    function isHomepage() {
        const currentPath = window.location.pathname;
        return currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html') || currentPath === '';
    }
    
    // Initialize everything when DOM is ready
    function init() {
        // Only show loading screen on homepage
        if (!isHomepage()) {
            console.log('🏠 Not homepage - skipping loading screen');
            return;
        }
        
        console.log('🏠 Homepage detected - initializing loading screen');
        
        // Only show loading screen on initial page load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initLoadingScreen();
                mobileOptimizations();
                accessibilityEnhancements();
                errorHandling();
            });
        } else {
            // DOM already loaded
            initLoadingScreen();
            mobileOptimizations();
            accessibilityEnhancements();
            errorHandling();
        }
    }
    
    // Start the loading screen
    init();
    
    // Export for debugging
    window.SalemLoadingScreen = {
        hide: hideLoadingScreen,
        show: initLoadingScreen
    };
    
})();