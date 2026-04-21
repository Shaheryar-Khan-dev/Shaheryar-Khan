
'use strict';

// 1. Select the form element
const contactForm = document.querySelector('.contact-form');

// 2. Add the submit event listener
contactForm.addEventListener('submit', function (event) {
  // Prevent the default form submission (page reload)
  event.preventDefault();

  // 3. Get values using the input positions or selectors
  const fullName = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  // 4. Log the data to the console
  console.log('--- New Contact Form Submission ---');
  console.log('Name:    ', fullName);
  console.log('Email:   ', email);
  console.log('Message: ', message);
  console.log('-----------------------------------');
  alert('Form submitted! Check the console for details.');

  // Optional: Clear the form after logging
  // this.reset();
});
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // Prevent default anchor behavior if you're using <a> tags
    event.preventDefault();

    const target = this.textContent.toLowerCase().trim();

    // 1. Update Active Nav State
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // 2. Switch Pages WITHOUT Scrolling
    pages.forEach(page => {
      if (page.dataset.page === target) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
    
    // NOTE: We removed window.scrollTo(0,0) so the view stays put!
  });
});
