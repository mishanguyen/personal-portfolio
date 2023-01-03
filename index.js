const menu = document.querySelector(".ham-menu-links");
const menuItems = document.querySelectorAll(".ham-menu-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close");
const menuIcon = document.querySelector(".open");
const ul = document.querySelector('.ham-menu-links');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    ul.style.display = "none"
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    ul.style.display = "block"
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)