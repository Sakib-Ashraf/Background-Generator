// @ts-nocheck
// BACKGROUND GENERATOR

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let grdAngle = document.querySelector(".grd-angle");
let body = document.getElementById("body");
let randomValue = document.getElementById("randval");
let css = document.querySelector(".css");
let randomColorValue1 = document.querySelector(".randcolval1");
let outputColorValue1 = document.querySelector(".outputcol1");
let randomColorValue2 = document.querySelector(".randcolval2");
let outputColorValue2 = document.querySelector(".outputcol2");

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setRandomColor = () => {
    let bgColor1 = outputColorValue1.style.backgroundColor = getRandomColor();
    let bgColor2 = outputColorValue2.style.backgroundColor = getRandomColor();
    randomColorValue1.textContent = bgColor1;
    randomColorValue2.textContent = bgColor2;
    body.style.backgroundImage = "linear-gradient(" + grdAngle.value + "deg, " + bgColor1 + ", " + bgColor2 + ")";
    css.textContent = body.style.backgroundImage + ";";
};

const randomColorFunc = () => {
    getRandomColor();
    setRandomColor();
};
const colorGenerator = () => {
    body.style.backgroundImage = "linear-gradient(" + grdAngle.value + "deg, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.backgroundImage + ";";
};


const defaultFunc = () => {
    css.textContent = `Default Value Is: linear-gradient(90deg, rgb(218, 68, 83), rgb(137, 33, 107));`;
    randomColorValue1.textContent = `#DA4453`;
    randomColorValue2.textContent = `#89216B`;
};

color1.addEventListener("input", colorGenerator);
color2.addEventListener("input", colorGenerator);
document.addEventListener("DOMContentLoaded", defaultFunc);
randomValue.addEventListener("click", randomColorFunc);
