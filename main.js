import './style.css';
import { createHeader } from './src/components/Header.js';
import { createMenu } from './src/components/Menu.js';
import { createAbout } from './src/components/About.js';
import { createContact } from './src/components/Contact.js';
import { createFooter } from './src/components/Footer.js';
import AOS from 'aos';

// Initialize AOS
AOS.init({
  duration: 800,
  offset: 100,
  once: true,
  disable: 'mobile' // Disable animations on mobile for better performance
});

// Compose the page
document.querySelector('#app').innerHTML = `
  ${createHeader()}
  <main>
    ${createMenu()}
    ${createAbout()}
    ${createContact()}
  </main>
  ${createFooter()}
`;

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('menu-open') && 
      !e.target.closest('.nav-links') && 
      !e.target.closest('.mobile-menu-btn')) {
    document.body.classList.remove('menu-open');
  }
});

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