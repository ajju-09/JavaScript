// Q1
// for(let i=0; i<=100; i++){
//     if(i%2===0){ // for odd for even i%2 !=0
//     console.log(i);
//     }
// }

// Q2
let rand = 25;
let num = prompt("Guess the number between 1 to 100");


while(num != rand){
    num = prompt("You entered wrong number. Guess again :");
}
console.log("Congrats, you guess the right number");
