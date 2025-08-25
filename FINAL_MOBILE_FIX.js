/* ===== FINAL COMPREHENSIVE MOBILE NAVIGATION FIX ===== */
/* This file completely handles mobile navigation without conflicts */

console.log('🚀 FINAL MOBILE NAVIGATION FIX LOADING...');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navLinks');

  if (!menuButton || !navMenu) {
    console.error('Navigation error: menuButton or navMenu not found.');
    return;
  }

  function openMenu() {
    navMenu.classList.add('active');
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    navMenu.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }
  menuButton.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.contains('active') ? closeMenu() : openMenu();
  });
  // Close menu when clicking a nav link (mobile)
  navMenu.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') closeMenu();
  });
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuButton.contains(e.target)) {
      closeMenu();
    }
  });
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) closeMenu();
  });
});

console.log('🚀 FINAL MOBILE NAVIGATION FIX LOADED');
