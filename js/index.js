// Get html elements
// menu = document.querySelector('.menu');
// about = document.querySelector('.about');
aboutBtn = document.getElementById('about-btn');
crossBtn = document.querySelector('.cross');

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

// Add EventListener
aboutBtn.addEventListener('click', () => {
  // Push menu to the right and render invisible
  TweenMax.to('.menu', 1.5, { x: 200, opacity: 0 });
  // Bring About section to menu's initial position and render visible
  TweenMax.to('.about', 2.5, { y: -420, opacity: 1 });
});

crossBtn.addEventListener('click', () => {
  // Push menu to original position and render visible
  TweenMax.to('.menu', 2.5, { x: 0, opacity: 1 });
  // Bring About section to initial position and render invisible
  TweenMax.to('.about', 1.5, { y: 420, opacity: 0 });
});

// Init Smooth Scroll for all anchor tags
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 3000
});
