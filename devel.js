
let colors = ["#GFFACD" , "#FFFACD", "#ADD8E6", "#7CFC00" , "#FFF0F5", "#E6E6FA"];

const bts = document.getElementById("bts");

const color = document.querySelector(".colors");


bts.addEventListener("click",function()  {

let randomNumber = getRandomNumber();

document.body.style.backgroundColor = colors[randomNumber];


color.textContent = colors[randomNumber];
})

function getRandomNumber () {
   return Math.floor(Math.random() *  colors.length);
}








 