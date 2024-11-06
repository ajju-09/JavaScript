// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerText); 
// console.log(div.innerHTML); 
// let heading = document.querySelector("h1");

const tempGun = document.getElementsByClassName("gun-name");

// We cannot use foreach loop in getElementsByClassName so convert it into array 

const convertIntoArray = Array.from(tempGun);

convertIntoArray.forEach( (gun) => {
    gun.style.backgroundColor = 'red';
})
