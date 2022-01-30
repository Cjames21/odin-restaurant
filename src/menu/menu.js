import './menu.css';
import menuItems from '../utils/menuItems.js';


const menu = () => {
    console.log("inside menu builder");
    let contentPage = document.getElementById('content');
    let menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";

    menuItems.forEach((item) => {
        menuContainer.appendChild(menuItem(
            item.name,
            item.img,
            item.desc,
            item.price
        ))
    })

    contentPage.appendChild(menuContainer);
}

const menuItem = (name, imgPath, desc, price) => {
    console.log("Inside menu item builder");
    let container = document.createElement('div');
    container.className = "menu-item-container";

    let title = document.createElement('h2')
    title.textContent= name;
    container.appendChild(title);

    let img = document.createElement('img');
    img.src = imgPath;
    container.appendChild(img);

    let description = document.createElement('p');
    description.textContent = desc;
    container.appendChild(description);

    let cost = document.createElement('p');
    cost.className = "menu-item-cost";
    cost.textContent = "$" + price;
    container.appendChild(cost);

    return container;
}

export default menu;