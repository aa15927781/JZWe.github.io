/*
console.log(localStorage.getItem("title"));
console.log(localStorage.getItem("author"));
console.log(localStorage.getItem("intro"));
console.log(localStorage.getItem("image"));
*/


var titleString = document.createElement("b");
var authorString = document.createElement("b");
var introString = document.createElement("b");

// 把title、author、intro的內容撈出來，並接在p段落裡
titleString.textContent = localStorage.getItem("title");
authorString.textContent = localStorage.getItem("author");
introString.textContent = localStorage.getItem("intro");

document.querySelector(".title").appendChild(titleString);
document.querySelector(".author").appendChild(authorString);
document.querySelector(".intro").appendChild(introString);

// 把index.html中的card-image-top裡src的值撈出來，並存在cardInfo.html中的card-image裡
var imgSelector = document.querySelector(".card-img");
imgSelector.setAttribute("src",localStorage.getItem("image"));