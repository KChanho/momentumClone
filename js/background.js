//https://korean.visitkorea.or.kr/ "이번달 인기 검색 여행지는 어디?"
const images = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpeg", "6.jpg", "7.jpg", "8.bmp", "9.jpg", "10.jpg", "11.jpg"];

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimage}`;

document.body.appendChild(bgImage);