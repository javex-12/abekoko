// Salem African Church of Christ - Main JavaScript
// Professional Multi-Page Website with Subtle 3D Animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize performance detection first
    initializePerformanceDetection();
    
    // Initialize all components
    initializeNavigation();
    initializeAnimations();
    initializeForms();
    initializeScrollEffects();
    initializeWheelScrollEffect();
    initializePerformanceOptimizations();
});

// Performance Detection
function initializePerformanceDetection() {
    const isLowEndDevice = detectLowEndDevice();
    
    if (isLowEndDevice) {
        document.body.classList.add('low-performance');
        console.log('Low-end device detected - Performance mode enabled');
        
        // Add subtle performance indicator (remove in production)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(255, 165, 0, 0.8);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 10000;
                font-family: monospace;
            `;
            indicator.textContent = 'Performance Mode';
            document.body.appendChild(indicator);
            
            setTimeout(() => {
                indicator.style.opacity = '0';
                setTimeout(() => indicator.remove(), 1000);
            }, 3000);
        }
    } else {
        console.log('High-performance device detected - Full 3D effects enabled');
    }
    
    // Create scroll wheel element
    createScrollWheel();
}

function detectLowEndDevice() {
    // Check for various indicators of low-end devices
    const checks = {
        // Memory check
        lowMemory: navigator.deviceMemory && navigator.deviceMemory <= 2,
        
        // CPU cores check
        lowCores: navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2,
        
        // Connection check
        slowConnection: navigator.connection && 
                       (navigator.connection.effectiveType === 'slow-2g' || 
                        navigator.connection.effectiveType === '2g' ||
                        navigator.connection.effectiveType === '3g'),
        
        // User agent checks for older devices
        oldAndroid: /Android [1-6]\./i.test(navigator.userAgent),
        oldIOS: /iPhone OS [1-9]_/i.test(navigator.userAgent),
        
        // Screen size check (very small screens often indicate older devices)
        smallScreen: window.screen.width <= 360 && window.screen.height <= 640,
        
        // Performance timing check
        slowLoad: performance.timing && 
                 (performance.timing.loadEventEnd - performance.timing.navigationStart) > 3000
    };
    
    // If any two or more checks are true, consider it low-end
    const trueChecks = Object.values(checks).filter(Boolean).length;
    return trueChecks >= 2;
}

function createScrollWheel() {
    const wheelContainer = document.createElement('div');
    wheelContainer.className = 'scroll-wheel-container';
    
    const wheel = document.createElement('div');
    wheel.className = 'scroll-wheel';
    wheel.id = 'scrollWheel';
    
    wheelContainer.appendChild(wheel);
    document.body.appendChild(wheelContainer);
}

// Navigation Management
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            // Add subtle 3D rotation effect
            if (navLinks.classList.contains('active')) {
                menuToggle.style.transform = 'rotateY(180deg)';
            } else {
                menuToggle.style.transform = 'rotateY(0deg)';
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.style.transform = 'rotateY(0deg)';
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.style.transform = 'rotateY(0deg)';
            }
        });
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

    // Set active navigation link based on current page
    setActiveNavLink();
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Animation Management
function initializeAnimations() {
    // Lightweight Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                observer.unobserve(entry.target); // Stop observing once loaded
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe elements for animations
    document.querySelectorAll('.section, .card, .grid').forEach(el => {
        observer.observe(el);
    });

    // Lightweight card hover effects (handled by CSS)

    // Lightweight button effects (handled by CSS)
}

// Form Management
function initializeForms() {
    // EmailJS initialization (if available)
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "Tk_a5VuZRTEMNh4SL",
        });
    }

    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Prayer request form handler
    const prayerForm = document.getElementById('prayerRequestForm');
    if (prayerForm) {
        prayerForm.addEventListener('submit', handlePrayerForm);
    }

    // Testimony form handler
    const testimonyForm = document.getElementById('testimonyForm');
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', handleTestimonyForm);
    }

    // Birthday form handler
    const birthdayForm = document.getElementById('birthdayForm');
    if (birthdayForm) {
        birthdayForm.addEventListener('submit', handleBirthdayForm);
    }

    // Volunteer form handler
    const volunteerForm = document.getElementById('volunteerForm');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', handleVolunteerForm);
    }

    // Feedback form handler
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackForm);
    }

    // Add form field animations
    document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
        field.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        field.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Form Handlers
function handleContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Sending...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'General Contact',
            name: form.name.value,
            email: form.email.value,
            phone: form.phone?.value || 'Not provided',
            category: 'General Inquiry',
            message: `Address: ${form.address?.value || 'Not provided'}\n\nMessage: ${form.message.value}`,
            anonymous: 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error sending your message. Please try again later.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Send Message');
            });
    } else {
        // Fallback for when EmailJS is not available
        setTimeout(() => {
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            form.reset();
            hideFormLoading(btn, 'Send Message');
        }, 1000);
    }
}

function handlePrayerForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Submitting...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'Prayer Request',
            name: form.prayer_name?.value || 'Anonymous',
            email: form.prayer_email?.value || 'Not provided',
            phone: form.prayer_phone?.value || 'Not provided',
            category: form.prayer_category?.value || 'General',
            message: form.prayer_request?.value || '',
            anonymous: form.anonymous_prayer?.checked ? 'Yes' : 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Your prayer request has been submitted. We will pray for you.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error submitting your prayer request. Please try again.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Submit Prayer Request');
            });
    } else {
        setTimeout(() => {
            showNotification('Your prayer request has been submitted. We will pray for you.', 'success');
            form.reset();
            hideFormLoading(btn, 'Submit Prayer Request');
        }, 1000);
    }
}

function handleTestimonyForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Sharing...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'Testimony',
            name: form.testimony_name?.value || '',
            email: form.testimony_email?.value || 'Not provided',
            phone: 'Not applicable',
            category: form.testimony_category?.value || 'General',
            message: form.testimony_text?.value || '',
            anonymous: 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Thank you for sharing your testimony! God bless you.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error sharing your testimony. Please try again.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Share Testimony');
            });
    } else {
        setTimeout(() => {
            showNotification('Thank you for sharing your testimony! God bless you.', 'success');
            form.reset();
            hideFormLoading(btn, 'Share Testimony');
        }, 1000);
    }
}

function handleBirthdayForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Registering...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'Birthday Registration',
            name: form.birthday_name?.value || '',
            email: form.birthday_email?.value || '',
            phone: form.birthday_phone?.value || 'Not provided',
            category: 'Birthday Registration',
            message: `Birthday Date: ${form.birthday_date?.value || 'Not provided'}\n\nSpecial Message: ${form.birthday_message?.value || 'None'}`,
            anonymous: 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Your birthday has been registered! We look forward to celebrating with you.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error registering your birthday. Please try again.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Register Birthday');
            });
    } else {
        setTimeout(() => {
            showNotification('Your birthday has been registered! We look forward to celebrating with you.', 'success');
            form.reset();
            hideFormLoading(btn, 'Register Birthday');
        }, 1000);
    }
}

function handleVolunteerForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Registering...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'Volunteer Registration',
            name: form.volunteer_name?.value || '',
            email: form.volunteer_email?.value || '',
            phone: form.volunteer_phone?.value || '',
            category: form.volunteer_ministry?.value || 'General',
            message: `Preferred Ministry: ${form.volunteer_ministry?.value || 'Not specified'}\n\nAvailability: ${form.volunteer_availability?.value || 'Not specified'}\n\nExperience/Skills: ${form.volunteer_experience?.value || 'None provided'}`,
            anonymous: 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Thank you for volunteering! We will contact you soon.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error submitting your volunteer registration. Please try again.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Register to Volunteer');
            });
    } else {
        setTimeout(() => {
            showNotification('Thank you for volunteering! We will contact you soon.', 'success');
            form.reset();
            hideFormLoading(btn, 'Register to Volunteer');
        }, 1000);
    }
}

function handleFeedbackForm(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    
    showFormLoading(btn, 'Submitting...');
    
    if (typeof emailjs !== 'undefined') {
        const templateParams = {
            form_type: 'Feedback',
            name: form.feedback_name?.value || 'Anonymous',
            email: form.feedback_email?.value || 'Not provided',
            phone: 'Not applicable',
            category: `${form.feedback_type?.value || 'General'} - ${form.feedback_category?.value || 'General'}`,
            message: form.feedback_message?.value || '',
            anonymous: form.anonymous_feedback?.checked ? 'Yes' : 'No',
            contact_number: Math.random() * 100000 | 0
        };

        emailjs.send('service_qr5y3or', 'template_nu6l6nf', templateParams)
            .then(function(response) {
                showNotification('Thank you for your feedback! We appreciate your input.', 'success');
                form.reset();
            })
            .catch(function(error) {
                showNotification('There was an error submitting your feedback. Please try again.', 'error');
            })
            .finally(function() {
                hideFormLoading(btn, 'Submit Feedback');
            });
    } else {
        setTimeout(() => {
            showNotification('Thank you for your feedback! We appreciate your input.', 'success');
            form.reset();
            hideFormLoading(btn, 'Submit Feedback');
        }, 1000);
    }
}

// Utility Functions
function showFormLoading(btn, text) {
    btn.disabled = true;
    btn.textContent = text;
    btn.style.transform = 'scale(0.95)';
}

function hideFormLoading(btn, originalText) {
    btn.disabled = false;
    btn.textContent = originalText;
    btn.style.transform = 'scale(1)';
}

function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-header">
            <div class="notification-icon">
                <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-triangle'}"></i>
            </div>
            <div class="notification-content">
                <h4>${type === 'success' ? 'Success!' : 'Error'}</h4>
                <p>${message}</p>
            </div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s ease, opacity 0.4s ease;
        opacity: 0;
        max-width: 350px;
        border-left: 5px solid ${type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
    `;

    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(400px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 400);
        }
    }, 5000);
}

// Wheel Scroll Effect
function initializeWheelScrollEffect() {
    const wheel = document.getElementById('scrollWheel');
    if (!wheel) return;
    
    let currentRotation = 0;
    let isScrolling = false;
    let scrollTimeout;
    
    // Throttled scroll handler for performance
    let ticking = false;
    
    function updateWheel() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollTop / maxScroll;
        
        // Calculate rotation based on scroll (360 degrees per full page scroll)
        const targetRotation = scrollProgress * 360 * 2; // 2 full rotations per page
        
        // Smooth rotation with easing
        currentRotation += (targetRotation - currentRotation) * 0.1;
        
        // Apply rotation with performance consideration
        const isLowPerf = document.body.classList.contains('low-performance');
        const intensity = isLowPerf ? 0.5 : 1;
        
        wheel.style.transform = `translate(-50%, -50%) rotateX(75deg) rotateZ(${currentRotation * intensity}deg)`;
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateWheel);
            ticking = true;
        }
    }
    
    // Optimized scroll listener
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Handle scroll start/end for additional effects
    window.addEventListener('scroll', function() {
        isScrolling = true;
        wheel.style.opacity = '1';
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            isScrolling = false;
            wheel.style.opacity = '0.7';
        }, 150);
    }, { passive: true });
}

// Scroll Effects
function initializeScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lightweight parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.1; // Reduced parallax effect
            hero.style.transform = `translateY(${rate}px)`;
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });

    // Service Worker registration (if available)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
}

// Copy to clipboard functionality
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--primary-color)';
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Dynamic content loading
function loadDynamicContent() {
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
        
        prayerPointsList.innerHTML = prayerPoints.map(point => `<li style="padding: 0.8rem; margin-bottom: 0.5rem; background: var(--light-color); border-radius: 6px; border-left: 3px solid var(--primary-color); transition: var(--transition);">${point}</li>`).join('');
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

// Initialize dynamic content when page loads
document.addEventListener('DOMContentLoaded', loadDynamicContent);

// Export functions for global use
window.copyToClipboard = copyToClipboard;
window.showNotification = showNotification;