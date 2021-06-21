const openMenu = document.querySelector(".openMenu");
const mainMenu = document.querySelector(".navbar-wrapper");
const closeMenu = document.querySelector(".closeMenu");
const menuOverlay = document.querySelector(".menu-overlay");
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);
menuOverlay.addEventListener("click", hide);

function show() {
  mainMenu.style.display = "flex";
  closeMenu.setAttribute("style", "display: flex !important");
  menuOverlay.setAttribute("style", "display: flex !important");
}

function hide() {
  mainMenu.style.display = "none";
  closeMenu.style.display = "none";
  menuOverlay.style.display = "none";
}
