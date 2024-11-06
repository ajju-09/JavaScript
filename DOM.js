// let heading = document.getElementById("myClass");
// console.dir(heading);

let headings = document.getElementsByClassName("myClass");
console.dir(headings);

let parah = document.getElementsByTagName("p");
console.dir(parah);

// Query selector (This tag can use class/Id/tag)
let firstEl = document.querySelector("p"); // it return 1st element 
// for accessing class use this .class_name for id #Id_name 
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // it return node list
console.dir(allEl);

