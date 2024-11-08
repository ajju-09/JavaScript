let div = document.querySelector("div");
console.log(div);

let Id = div.getAttribute("id"); // this is use to get attributes
console.log(Id); 

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.setAttribute("id", "paragraph"));// this is use to set attributes


// Accessing style in java script

div.style.backgroundColor = "skyblue";
div.style.fontSize = " 20px";
div.style.textAlign = "center";
div.innerText = "Hello";

// Insert elements in js
let btn = document.createElement("button"); // creating button using js
btn.innerText = "click me";
console.log(btn);

let div1 = document.querySelector("div");
// div1.append(btn); // this method add element at end of node

// div1.prepend(btn); // this method add element at start
// div1.before(btn); // add element outside(before) the div 
div1.after(btn); // add element outside(before) the div 

let h1 = document.createElement("h1");
h1.innerHTML = "<i>Its a Heading 1</i>";

document.querySelector("body").prepend(h1);

let h2 = document.querySelector("h2");
h2.remove();