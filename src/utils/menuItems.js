import pepp from '../img/foodImg/pepp.jpeg';
import cheese from '../img/foodImg/cheese.jpeg';
import bbq from '../img/foodImg/bbq.jpeg';
import gross from '../img/foodImg/gross.jpeg';
import meat from '../img/foodImg/meat.jpeg';


const menuItems = [
    {
        name: "Pepperoni Pizza",
        desc: "Good freakin' stuff. Dough, sauce, cheese, pep.",
        img: pepp,
        price: 10
    },
    {
        name: "Cheese Pizza",
        desc: "Pepperoni pizza without the pepperoni...For those low calorie days.",
        img: cheese,
        price: 10
    },
    {
        name: "Spicy BBQ Chicken Pizza",
        desc: "Feeling a little wild?! Get this, you won't regret it.",
        img: bbq,
        price: 10
    },
    {
        name: "Hawaiian Pizza",
        desc: "Gross, no one likes this stuff so we're giving it away for free!",
        img: gross,
        price: 0
    },
    {
        name: "Meatlovers",
        desc: "Pepperoni pizza on steroids. If you want all the different parts of a pig on your pizza, this is the way.",
        img: meat,
        price: 12
    },
]

export default menuItems;