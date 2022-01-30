import clrScr from './utils/clearContent.js';
import navMenu from './nav-menu/nav-menu.js';
import home from './home/home.js';
import menu from './menu/menu.js';
import about from './about/about.js';
import init from './utils/init.js';

init();

let btnHome = document.getElementById('btn-home');
btnHome.addEventListener("click", () => {
    console.log("Home button clicked");
    clrScr();
    home();
})

let btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener("click", () => {
    console.log("Menu button clicked");
    clrScr();
    menu();
})

let btnAbout = document.getElementById('btn-about');
btnAbout.addEventListener("click", () => {
    console.log("About button clicked");
    clrScr();
    about();
})




