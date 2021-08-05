const images = ["0.jpg", "1.jpg", "2.jpg"];

const choseImg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${choseImg}`

document.body.appendChild(bgimg);