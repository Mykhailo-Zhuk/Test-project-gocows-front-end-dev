///////////////////////////// Header menu //////////////////////
function myFunction() {
  const list = document.getElementById('navigation-list');
  if (list.style.display === 'block') {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
}
///////////////////////////// Slideshow /////////////////////
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' activeDot', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' activeDot';
}
//////////////////////////////// Sticky sidebar //////////////////////////////
const sidebar = document.getElementById('fixed-sidebar');
const endFixed = document.getElementById('endFixed');
const stickyEnd = endFixed.offsetTop - sidebar.offsetHeight;
const stickyStart = sidebar.offsetHeight;

window.onscroll = function () {
  myStickyFunction();
};
// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myStickyFunction() {
  if (window.pageYOffset >= stickyEnd || window.pageYOffset <= stickyStart) {
    sidebar.classList.remove('sticky');
  } else {
    sidebar.classList.add('sticky');
  }
}

// When the user scrolls the page, execute myStickyFunction
