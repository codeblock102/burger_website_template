import './style.css';
import { createHeader } from './src/components/Header.js';
import { createMenu } from './src/components/Menu.js';
import { createAbout } from './src/components/About.js';
import { createContact } from './src/components/Contact.js';
import { createFooter } from './src/components/Footer.js';
import AOS from 'aos';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    disable: window.innerWidth < 768 // Disable on mobile
  });

  // Compose the page
  const app = document.querySelector('#app');
  if (app) {
    app.innerHTML = `
      ${createHeader()}
      <main>
        ${createMenu()}
        ${createAbout()}
        ${createContact()}
      </main>
      ${createFooter()}
    `;
  }

  // Mobile menu functionality
  function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle menu when hamburger icon is clicked
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.add('menu-open');
        console.log('Menu opened'); // Debug log
      });
    }

    // Close menu when X button is clicked
    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.remove('menu-open');
        console.log('Menu closed'); // Debug log
      });
    }

    // Close menu when nav links are clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('menu-open') && 
          !e.target.closest('.nav-links') && 
          !e.target.closest('.mobile-menu-btn')) {
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Call the setup function after the content is loaded
  setupMobileMenu();

  // Handle scroll behavior
  let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      document.body.classList.remove('scroll-up');
      return;
    }
    
    if (currentScroll > lastScroll && !document.body.classList.contains('scroll-down')) {
      document.body.classList.remove('scroll-up');
      document.body.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && document.body.classList.contains('scroll-down')) {
      document.body.classList.remove('scroll-down');
      document.body.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll event listener for nav
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});