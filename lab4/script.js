const firstElement = document.getElementById("favorite-films")
const secondElement = document.querySelector('.films');
const image = document.getElementById("image");

const colors = ['green', 'red', 'yellow', 'blue', 'black', 'white']

firstElement.onclick = () => randomizeElementColors(firstElement);
secondElement.onclick = () => randomizeElementColors(secondElement);

let imgWidth = 300;
let imgHeight = 400;
const SIZE_CHANGE = 20;




function randomizeElementColors(el) {
    const randomTextColor = getRandomColor();
    const randomBackgroundColor = getRandomColorExcept(randomTextColor);

    setTextColor(el, randomTextColor);
    setBackgroundColor(el, randomBackgroundColor);
}

function getRandomColorExcept(except) {
    let color = getRandomColor();
    return color === except ? getRandomColorExcept(except) : color;
}

function getRandomColor() {
    return colors[getRandomInt(colors.length)]
}

function getRandomInt(maxValue)
{
    return Math.floor(Math.random() * maxValue);
}

function setTextColor(el, color) {
    el.style.color = color;
}

function setBackgroundColor(el, color) {
    el.style.backgroundColor = color;
}

function addImage() {
    image.style.display = 'block';
}

function increaseImageSize() {
    imgWidth += SIZE_CHANGE;
    imgHeight += SIZE_CHANGE;

    updateImageSizes()
}

function decreaseImageSize() {
    imgWidth -= SIZE_CHANGE;
    imgHeight -= SIZE_CHANGE;

    updateImageSizes();
}

function updateImageSizes() {
    image.style.width = toPxStr(imgWidth);
    image.style.height = toPxStr(imgHeight);
}

function toPxStr(number) {
    return number.toString() + "px"
}

function removeImage() {
    image.style.display = 'none';
}
