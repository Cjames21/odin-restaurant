import './nav-menu.css';

const navMenu = () => {
    let mainPage = document.getElementById("content");
    let container = document.createElement('div');
    container.className = "nav-bar-container";

    container.appendChild(button("Home", "btn-home"));
    container.appendChild(button("Menu", "btn-menu"));
    container.appendChild(button("About", "btn-about"));

    mainPage.appendChild(container);
}

const button = (text, id) => {
    console.log("Inside button function");
    let btn = document.createElement('div');
    btn.textContent = text;
    btn.setAttribute("id", id);
    btn.className = "nav-menu-btn";

    return btn;
}

export default navMenu;