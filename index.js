const loadImage = (target, category, index) => {
    const img = document.createElement("img");
    img.src = "./assets/" + category + "/" + index + ".png";
    const src = document.getElementById(target);
    src.appendChild(img);
    src.className = "animate__animated animate__pulse animate__infinite";
    src.style.setProperty('--animate-duration', randomNumber(10, 20) + 's');
}

const randomNumber = (min, max) => {
    return String(Math.floor(Math.random() * (max - min) + min));
}

const handleBackground = async () => {
    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 20

    if (isDayTime) {
        document.body.style.backgroundColor = "#88B04B";
    } else {
        document.body.style.backgroundColor = "#34568B";
    }
}

const handleQuote = async () => {
    const request = await fetch("https://indirectasapi.herokuapp.com/indirecta");
    const data = await request.text();
    document.getElementById("quote").innerText = data;
}

document.addEventListener("DOMContentLoaded", () => {
    loadImage("carpincho", "", "original")
    loadImage("carpinchoa", "a", randomNumber(1, 8))
    loadImage("carpinchob", "b", randomNumber(1, 16))
    loadImage("carpinchoc", "c", randomNumber(1, 13))

    document.getElementById("quote").style.setProperty('--animate-duration', randomNumber(80, 120) + 's');
    handleBackground();
    handleQuote();

})