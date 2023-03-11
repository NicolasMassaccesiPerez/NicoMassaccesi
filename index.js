
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
var navbar = document.querySelector('.navbar');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }
  lastScrollTop = scrollTop;
});

const h2 = document.querySelector('.cambio-de-palabra');
if (h2) {
    
}
h2.addEventListener('mouseover', () => {
    h2.textContent = 'Front-End Developer';
    h2.classList.add('hover');
});
h2.addEventListener('mouseout', () => {
    h2.textContent = 'Nico Massaccesi';
    h2.classList.remove('hover');
});

const h1 = document.querySelector('.cambio-de-palabra');

h1.addEventListener('mouseover', () => {
  
});

h1.addEventListener('mouseout', () => {
  
});

AOS.init();

$('input,textarea').on('blur', function(){
  if( !$(this).val() == "" ){
    $(this).next().addClass('stay');
  } else {
    $(this).next().removeClass('stay');
  }
});