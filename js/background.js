const images = [ "0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"];


const choseImages = images[Math.floor(Math.random() * images.length)];

const backImages = document.createElement("img");

backImages.src = `img/${choseImages}`;
backImages.classList.add("backimage");

document.body.appendChild(backImages);

