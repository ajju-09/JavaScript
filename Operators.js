// Artimetic Operators
let a = 8;
let b = 3; 

console.log("A =",a, " & B =",b);
console.log("A + B = ", a+b );
console.log("A - B = ", a-b);
console.log("A * B = ", a*b);
console.log("A / B = ", a/b);
console.log("A % B = ", a%b);
console.log("A ** B = ", a**b); // 8^3 Exponentiation


// Unary Operator
a++;
console.log("A = ",a);
b--;
console.log("B = ",b);

// Assignment Operator
a += 4; //a = a + 4
console.log("A = ",a);
a -= 4; // a = a - 4;
console.log("A = ", a);
a *= 3;
a %= 3;
a /= 5;
a **= 2;
console.log("A =", a);

// Comparison Operator
let x = 4;
let y = "4";

console.log("Is X equal to Y ", x==y); // In bouble equal to it convert string into number 
console.log(" x===y", x===y); // Its a strict version of equal to it check for data types also
console.log("Is X equal to Y ", x!=y);

// Logical Operator

let a1 = 5;
let b1 = 4;

let cond1 = a1 > b1; // true
let cond2 = a1 === 5; // true

console.log("A && B ", cond1 && cond2); // it return true when both condition is true otherwise false

console.log("A || B ", cond1 || cond2); // it return false whem both condition is false otherwise true

console.log("A ! ",!(a1 === 5)); // true -> fasle or vise versa

// Ternary Operators
let age = 21;

let result = age >= 18 ? "You are 18+" : "You are not 18+";
console.log(result);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // Adding 1st two numbers and then return string 2

console.log(+true); // => 1
console.log(+""); // => 0

let score = 100;
// score++; 
++score;
console.log(score);


