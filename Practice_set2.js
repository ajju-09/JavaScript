// Q1
// let num = prompt("Enter a number");
// if(num%5 === 0){
//    console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"not a multiple of 5");
// }

// Q2
let  marks = prompt("Enter a marks");

if(marks <= 100 && marks >= 90){
    console.log("Your grade is A");
}   
else if(marks >= 70 && marks <= 89){
    console.log("Your grade is B");
}
else if(marks >= 60 && marks <= 69){
    console.log("Your grade is C");
}
else if(marks >= 50 && marks <= 59){
    console.log("Your grade is D");
}
else if(marks >= 0 && marks <= 49){
    console.log("Your grade is F");
}
else{
    console.log("Number must between 0 to 100");
}