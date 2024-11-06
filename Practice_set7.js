// Q1
function vowel(str) {
  let count = 0;
  for (const char of str) {
    if (char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u") {
        count++;
    }
  }
  console.log(count);
}

vowel("ckpcetcollege");

 // Q2
let array = [3, 5, 7, 4, 8];
array.forEach((num)=>{
  console.log(num*num);
});

// Q3
let marks = [67, 98, 76, 92, 34, 95];
let result = marks.filter((marks) => {
  return marks > 90 ;
});
console.log(result);

// Q4
let number = prompt("Enter a number :");
let arrayOfNumber = [];
for(let i=1; i<=number; i++){
  arrayOfNumber[i-1] = i;
}
console.log(arrayOfNumber);

let sum = arrayOfNumber.reduce((pre, curr) => {
  return pre + curr;
});
console.log("Sum of all number =", sum);

let product = arrayOfNumber.reduce((pre, curr) => {
  return pre * curr;
});
console.log("Factorial =", product);

