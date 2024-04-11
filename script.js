let images = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg',
    './img/img6.jpg', './img/img7.jpg', './img/img8.jpg', './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg'];
let currentImage = 0;


function load() {
    document.getElementById('images').innerHTML = ``;
    for (let i = 0; i < images.length; i++) {
        document.getElementById('images').innerHTML += `
        <div class="imgBox" onclick="openImg(${i})">
        <img src="${images[i]}" alt="Bild${i + 1}">
        </div>
        `;
    }
}

function openImg(i) {
    document.getElementById('images').innerHTML += `
        <div class="blackbox">
        <img src="./img/x-1727490_640.png" alt="Schließen" onclick="closeImg()" class="xImg">
        <img src="./img/arrow-left.png" alt="Pfeil-links" onclick="prevImg()" class="arrow">
        <img src="${images[i]}">
        <img src="./img/arrow-right.png" alt="Pfeil-rechts" onclick="nextImg()" class="arrow">
        </div>
        `;
    currentImage = i;
}

function prevImg() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    openImg(currentImage);
}

function nextImg() {
    currentImage = (currentImage + 1) % images.length;
    openImg(currentImage);
}

function closeImg() {
    load();
}