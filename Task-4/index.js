const color = document.getElementById("color");
const width = document.getElementById("width");
const height = document.getElementById("height");

const button = document.getElementById("btn");

const myDiv = document.getElementById("main");

button.addEventListener("click",function(){
  myDiv.style.backgroundColor = color.value;
  myDiv.style.width = width.value;
  myDiv.style.height = height.value;
})