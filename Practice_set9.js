let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);

let para = document.querySelector("p");

para.classList.add("newP1");