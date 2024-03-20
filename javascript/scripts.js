// JavaScript function to toggle the burger menu
function toggleMenu() {
  var menu = document.getElementById("menu");
  var burger = document.querySelector(".burger-menu");
  menu.classList.toggle("menu-visible");
  burger.classList.toggle("rotate");
}