import './home.css';

const home = () => {
    let contentContainer = document.getElementById("content");

    let hContainer = document.createElement('div');
    hContainer.className = "content-page";

    let header = document.createElement('div');
    header.className = "content-page-header";
    let headerText = document.createElement('h2');
    headerText.textContent = "Gyyrdy's Place";
    header.appendChild(headerText);
    hContainer.appendChild(header);


    let advertContainer = document.createElement('div');
    advertContainer.className = "content-page-advert";
    let adText = document.createElement('p');
    adText.textContent = "This is the best damned pizza you'll ever eat in your life!" +
        " If you think somewhere else has better, we'll burn them down. Guaranteed!"
    advertContainer.appendChild(adText);
    let adRef = document.createElement('h2');
    adRef.textContent = "-Gyyrdy";
    advertContainer.appendChild(adRef);
    hContainer.appendChild(advertContainer);


    let hoursTable = [
        {
            day: "Monday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Tuesday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Wednesday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Thursday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Friday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Saturday",
            hours: "11:00AM - 1:00AM"
        },
        {
            day: "Sunday",
            hours: "11:00AM - 1:00AM"
        }
    ]
    let hoursContainer = document.createElement('div');
    hoursContainer.className = "content-page-hours";
    hoursTable.forEach((day) => {
        let row = document.createElement('p');
        let rowString = day.day + ":    " + day.hours;
        row.textContent = rowString;
        hoursContainer.appendChild(row);
    })

    hContainer.appendChild(hoursContainer);


    let addressContainer = document.createElement('div');
    addressContainer.className = "content-page-address";
    let addressText = document.createElement('h3');
    addressText.textContent = "555 PooButt Avenue, Kingston, Jamaica";
    addressContainer.appendChild(addressText);

    hContainer.appendChild(addressContainer);    
    contentContainer.appendChild(hContainer);
}

export default home;

