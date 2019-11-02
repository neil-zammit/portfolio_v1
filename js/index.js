// Get html elements
// menu = document.querySelector('.menu');
// about = document.querySelector('.about');
aboutBtn = document.getElementById('about-btn');
aboutCrossBtn = document.querySelector('.about-cross');
contactBtn = document.getElementById('contact-btn');
contactCrossBtn = document.querySelector('.contact-cross');

// Add EventListeners for About Section
aboutBtn.addEventListener('click', () => {
  // Push menu to the right and render invisible
  TweenMax.to('.menu', 1.5, { x: 200, opacity: 0 });
  // Bring About section to menu's initial position and render visible
  TweenMax.to('.about', 2.5, { y: -420, opacity: 1 });
});

aboutCrossBtn.addEventListener('click', () => {
  // Push menu to original position and render visible
  TweenMax.to('.menu', 2.5, { x: 0, opacity: 1 });
  // Bring About section to initial position and render invisible
  TweenMax.to('.about', 1.5, { y: 420, opacity: 0 });
});

// Add EventListeners for Contact Section
contactBtn.addEventListener('click', () => {
  // Push menu to the right and render invisible
  TweenMax.to('.menu', 1.5, { x: 200, opacity: 0 });
  // Bring Contact section to menu's initial position and render visible
  TweenMax.to('.contact', 2, { y: -803, opacity: 1 });
});

contactCrossBtn.addEventListener('click', () => {
  // Push menu to original position and render visible
  TweenMax.to('.menu', 2.4, { x: 0, opacity: 1 });
  // Bring Contact section to initial position and render invisible
  TweenMax.to('.contact', 2.3, { y: 803, opacity: 0 });
});

// Init Smooth Scroll for all anchor tags
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 3000
});

// Functions
// Change screen function
// function removeMenu() {
//   menu.classList.add('hidden');
// }

// function showAbout() {
//   about.classList.add('show');
// }

// // Add EventListener
// aboutBtn.addEventListener('click', () => {
//   removeMenu();
//   showAbout();
// });
