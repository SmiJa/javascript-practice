// This is a single line Comment

/*
A multiline Comment
*/

console.log("Name: Jason Smith");

console.log("Favorite food: Pizza");

const colorPicker = document.querySelector("#color-picker");
const body = document.querySelector("body");
const btn = document.querySelector("button");


btn.addEventListener("click", changeBGColor);

function changeBGColor () {
    body.style.backgroundColor = colorPicker.value;
    btn.style.borderColor = colorPicker.value;
    btn.style.color = colorPicker.value;
    console.log(colorPicker.value);
}