const navToggle = document.querySelector('.nav-toogle');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle('nav-menu-visible');
    body.classList.toggle('body-scroll');
} )