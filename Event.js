let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let div1 = document.querySelector("#div1");

// // This is Event handlers
// btn1.onclick =(e)=>{ // e is object for event
//     // console.log("Button was clicked");
//     // alert("Enter valid phone number");
//     // let a = 45;
//     // a++;
//     // console.log(a);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// };
// btn2.ondblclick = () =>{   // () is known as handlers
//     console.log("I am button");
// };
// div1.onmouseover = () =>{
//     div1.style.backgroundColor = "Purple";
// };

// This is Event listners
btn1.addEventListener("click", () => {
    console.log("Button1 is clicked - Eventlistener1");
});
btn1.addEventListener("click", () => {
    console.log("Button1 is clicked - Eventlistener2");
});
const eventlistener3 = () => {
    console.log("Button1 is clicked - Eventlistener3");
};
btn1.addEventListener("click", eventlistener3);
btn1.addEventListener("click", () => {
    console.log("Button1 is clicked - Eventlistener4");
});

// Removing Event listener
btn1.removeEventListener("click", eventlistener3);
