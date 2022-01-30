import './about.css';

import staff from '../utils/staff.js';

const about = () => {
    let contentPage = document.getElementById('content');

    let aboutContainer = document.createElement('div');
    aboutContainer.className = "about-container";

    let header = document.createElement('h1');
    header.textContent = "Contact Us";
    contentPage.appendChild(header);

    staff.forEach((staff) => {
        contentPage.appendChild(staffInfo
            (staff.name,
            staff.title,
            staff.email,
            staff.phone,
            staff.img)
            )
    })

}

const staffInfo = (name, title, email, phone, img) => {
    let container = document.createElement('div');
    container.className = "staff-container";

    let containerText = document.createElement('div');
    containerText.className = "contact-text";

    let containerImg = document.createElement('div');
    containerImg.className = "contact-img";

    let mName = document.createElement('h3');
    mName.textContent = name;
    containerText.appendChild(mName);

    let mTitle = document.createElement('p');
    mTitle.textContent = title;
    containerText.appendChild(mTitle);

    let mPhone = document.createElement('p');
    mPhone.textContent = phone;
    containerText.appendChild(mPhone);
    
    let mEmail = document.createElement('p');
    mEmail.textContent = email;
    containerText.appendChild(mEmail);

    let portrait = document.createElement('img');
    portrait.src = img;
    containerImg.appendChild(portrait);

    container.appendChild(containerText);
    container.appendChild(containerImg);

    return container;
}

export default about;