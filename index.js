window.onload = () => {
  navMenu.classList.remove("is-shown");
};

var burgerIcon = document.querySelector(".burger-menu");
var navMenu = document.querySelector(".mobile-nav-list");
var burgerBar = document.querySelector(".bar-burger-menu");

var toggleMenu = function toggleMenu() {
  navMenu.classList.toggle("is-shown");
  burgerBar.classList.toggle("is-active");
};

burgerIcon.addEventListener("click", toggleMenu);
