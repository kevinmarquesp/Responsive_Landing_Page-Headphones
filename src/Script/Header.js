const header = document.querySelector("#header");

const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");


// Muda a cor do cabeçalho quando a página desce
window.addEventListener("scroll", changeBackgroundColor);
changeBackgroundColor();

// Abre a barra de navegação
navToggle.onclick = () => {
  navMenu.style.top = "0";
}

// Fecha ela quando, no botão ou no link
navClose.onclick = closeMenu

navLink.forEach(e => {
  e.onclick = closeMenu;
});


function closeMenu() {
  navMenu.style.top = "-100%";
}

function changeBackgroundColor() {
  if(scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

