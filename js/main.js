// Salem African Church of Christ - Main JavaScript
// Simplified for better performance

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation...');
    initializeNavigation();
    loadDynamicContent();
});

// Navigation Management
function initializeNavigation() {
    console.log('Starting navigation initialization...');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    
    console.log('Menu toggle found:', !!menuToggle);
    console.log('Nav links found:', !!navLinks);
    console.log('Header found:', !!header);

    // Function to close mobile menu
    function closeMobileMenu() {
        console.log('Closing mobile menu');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    // Function to open mobile menu
    function openMobileMenu() {
        console.log('Opening mobile menu');
        if (navLinks) {
            navLinks.classList.add('active');
        }
        if (menuToggle) {
            menuToggle.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
    }

    // Mobile menu toggle
    if (menuToggle && navLinks) {
        console.log('Setting up mobile menu toggle');
        
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu toggle clicked');
            
            if (navLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close mobile menu when clicking a link
        const navLinkElements = document.querySelectorAll('.nav-links a');
        console.log('Found nav links:', navLinkElements.length);
        
        navLinkElements.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Nav link clicked, closing menu');
                closeMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                console.log('Clicked outside, closing menu');
                closeMobileMenu();
            }
        });

        // Close mobile menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                console.log('Escape pressed, closing menu');
                closeMobileMenu();
            }
        });

        // Prevent menu from closing when clicking inside the nav menu
        navLinks.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    } else {
        console.error('Navigation elements not found!');
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Set active navigation link
    setActiveNavLink();
}

// Set active navigation link
function setActiveNavLink() {
    console.log('Setting active nav link...');
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    console.log('Current page:', currentPage);
    console.log('Found nav links for active state:', navLinks.length);
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html') ||
            linkPage.includes(currentPage)) {
            link.classList.add('active');
            console.log('Set active:', linkPage);
        }
    });
}

// Dynamic content loading
function loadDynamicContent() {
    console.log('Loading dynamic content...');
    
    // Load prayer points for the week
    const prayerPointsList = document.getElementById('daily-prayers');
    if (prayerPointsList) {
        const prayerPoints = [
            "The mighty hand of God will uphold you in the name of Jesus Christ",
            "You and I will not mourn over our children in Jesus name",
            "God will grant you wisdom and understanding in all your endeavors",
            "May the Lord bless you and keep you safe from all harm",
            "Your family will experience God's abundant blessings this week"
        ];
        
        prayerPointsList.innerHTML = prayerPoints.map(point => 
            `<li style="padding: 0.8rem; margin-bottom: 0.5rem; background: var(--light-color); border-radius: 6px; border-left: 3px solid var(--primary-color);">${point}</li>`
        ).join('');
    }

    // Load food for thought
    const thoughtElement = document.getElementById('daily-thought');
    if (thoughtElement) {
        const thoughts = [
            "Don't give the best of yourself to those who don't see the best in you.",
            "Faith is taking the first step even when you don't see the whole staircase.",
            "God's plan for your life is always better than your own.",
            "Trust in the Lord with all your heart and lean not on your own understanding.",
            "Every day is a gift from God, make the most of it."
        ];
        
        const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
        thoughtElement.textContent = randomThought;
    }

    // Update current year in footer
    const currentYearElements = document.querySelectorAll('.current-year');
    currentYearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}

console.log('JavaScript file loaded successfully');