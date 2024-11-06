let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " From CKPCET";

let div = document.querySelectorAll(".box");
console.log(div[0]);
let idx = 1;
for(div of div){
    div.innerText = `Its a ${idx} div`;
    idx++;
}