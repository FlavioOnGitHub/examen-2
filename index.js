window.onload = () => {
  navMenu.classList.remove("is-shown");
};

var burgerIcon = document.querySelector(".burger-menu");
var navMenu = document.querySelector(".mobile-nav-list");
var blurrPage = document.querySelector(".page-blurr");

var toggleMenu = function toggleMenu() {
  navMenu.classList.toggle("is-hidden");
  burgerIcon.classList.toggle("burger-closed");
  blurrPage.classList.toggle("not-blurr");
};

var closeMenu = function closeMenu() {
  navMenu.classList.toggle("is-hidden");
  burgerIcon.classList.toggle("burger-closed");
  blurrPage.classList.toggle("not-blurr");
};

burgerIcon.addEventListener("click", toggleMenu);
blurrPage.addEventListener("click", closeMenu);
