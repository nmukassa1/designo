//VARIABLES
const nav = document.querySelector('nav');
const navLinks = document.getElementsByClassName('dropdown-link');
const menu = document.querySelector('.menu');
const hamburger = `<img src="assets/shared/mobile/icon-hamburger.svg" alt="Dropdown menu icon">`;
const cross = `<img src="assets/shared/mobile/icon-close.svg" alt="Close dropdown icon">`;

//EVENT LISTENERS
menu.addEventListener('click', dropdown);

//FUNCTIONS
function dropdown() {
    if(menu.innerHTML == cross) {
        menu.innerHTML = hamburger
    } else {
        menu.innerHTML = cross
    }

    nav.classList.toggle('navActive');
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('dropdownLinksActive');
    }
}