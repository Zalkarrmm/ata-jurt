let button = document.querySelector('.biographyButton')
let section2 = document.querySelector('#secondSec')
let noneText = document.querySelector('.noneText')
button.addEventListener('click' , e=>{  
    e.preventDefault();
    noneText.classList.toggle('existText');
    section2.classList.toggle('secondSectionBiiged')
})


const navbar = document.querySelector('.navbar')
const langs = document.querySelector('.langs')
const bigNav = document.querySelector('.bigNav')
const burgerMenuButton = document.querySelector('.burgerMenuButton');

burgerMenuButton.addEventListener('click' , e => {
    e.preventDefault();
    bigNav.classList.toggle('getModal');
    navbar.classList.toggle('getNavbar');
    langs.classList.toggle('getLangs')
})



