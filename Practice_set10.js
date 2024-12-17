let action = document.querySelector("#btn");
let current = "light";
let body = document.querySelector("body");

action.addEventListener("click", () => {
    if(current === "light"){
        current = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        current = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(current);
});