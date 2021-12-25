//Pantone "Color of the year" {color, year, name}
const colors = [
{   color: "#6768AB",
    year: 2022,
    name: "Very Peri"
}, 
{   color: "#939597",
    year: 2021,
    name: "Ultimate Gray"
},
{   color: "#F5DF4E",
    year: 2021,
    name: "Illuminating" 
},
{   color: "#0F4C82",
    year: 2020,
    name: "Classic Blue"
},
{   color: "#939597",
    year: 2019,
    name: "Living Coral"
},
{   color: "#675094",
    year: 2018,
    name: "Ultra Violet"
},
{   color: "#85AF4B",
    year: 2017,
    name: "Greenery"
},
{   color: "#F6CAC9",
    year: 2016,
    name: "Rose Quartz"
},
{   color: "#90A7D1",
    year: 2016,
    name: "Serenity"
},
{   color: "#985051",
    year: 2015,
    name: "Marsala"
},
];

const name = document.querySelector("#quote span:first-child");
const year = document.querySelector("#quote span:last-child");
const chosenColor = colors[Math.floor(Math.random() * colors.length)];

document.body.style.backgroundColor = chosenColor.color;
name.innerText = chosenColor.name;
year.innerText = chosenColor.year;