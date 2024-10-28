function myFunction() {
    console.log("Its a Java Script");
}
myFunction();

function message (msg){
    console.log(msg);
}
message("Its an JS");

// Arrow Function
const multi =(a, b) => {
    console.log(a*b);
}

// for-each function (its a callback function)
// callback is a function passed as an argument to another function.
let arr = [1, 3, 5, 7, 9];
 arr.forEach(function print(val){
    console.log(val);
 });

 let arr1 = ["Pune", "Mumbai", "Surat", "Delhi"];

 arr1.forEach(function upper(val, index, array){
    console.log(val.toUpperCase(), index, array); // For each function is use mostlly to perform similar work on array element
 });

 // More array methods
 // Map method (it same as for each method but give new array it does not change initiale array)
 let num = [34, 56, 78];
 let newNum = num.map((num) => {
    return num*num;
 });
 console.log(newNum);

 // Filter method (it filter elements from array based on our condition)
 let digit = [3, 2, 6, 5, 8, 19, 110];
 let newDigit = digit.filter((digit) => {
    return digit % 2 === 0;
 });
 console.log(newDigit);

 // Reduce method (reduce the array to a single value)
 let number = [10, 34, 23, 44];
 let output = number.reduce((pre, curr) => {
    return pre + curr;
 });
console.log(output);

// To find greater value
let arr2 = [23, 45, 12, 10];
let newArr2 = arr2.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
});
console.log(newArr2);

function calculateCartPrice(...price){
   return price;
}

console.log(calculateCartPrice(200, 400, 299, 3999));

let obj = {
   username: "Ajinkya",
   price: 2000,
};

function myObject(anyobject){
   console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

myObject(obj);

let myArray = [200, 400, 1000, 2000];

function anyArray(somearray){
   for(let arr of somearray){
      return somearray;
   }
   // return somearray[1];
}

console.log(anyArray(myArray));
