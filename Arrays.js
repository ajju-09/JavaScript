// Arrays are mutable

let array = [45, 23, 67, 89, 45];
for(let i=0; i<array.length; i++){
    console.log(`${i} = ${array[i]}`);
}
for(let ele of array){
    console.log(ele);
}

let string = ["Jina", "Mina", "Tina"];
console.log(string);

let cities = ["Delhi", "Surat", "Pune", "Lucknow", "Faridabad"];

for (let city of cities){
    console.log(city.toUpperCase());
}

// Methods in array
let fruits = ["Apple", "Orange", "Pineapple"];

//Push method is use to add element at end
fruits.push("Grapes", "Kiwi");
console.log(fruits); 

// Pop method delet element from array from end
fruits.pop(); 
console.log(fruits);

//toString method is use to covert array into string
console.log(fruits.toString());

// Concate method is use to connect to array
let marvel = ["Ironman", "Spiderman", "Thor"];
let dc = ["Batman", "Superman"];
let heroes = marvel.concat(dc);
console.log(heroes);

// join method bind array and convert it into string
const marvel2 = marvel.join();

// unshift method is use to add element at the start
marvel.unshift("Antman");
console.log(marvel);

// shift method is use to remove element from front
marvel.shift();
//Shift method is use for deleting element from start
console.log(dc.shift());

// Slice method is use to returm a piece of array ^^ its does not change main array ^^
console.log(array.slice(1, 3));

// Splice method is same as slice bt it change main array
console.log(array.splice(1, 2, 1001, 1002)); // splice(index no, how much element want to delete after that, add number too)


// Spread operator in arrays (Same work as concat)
const new_arr = [...cities, ...marvel];
console.log(new_arr);

//Dynamic array
const arrys = [1, 2, 3, [4, 5, 6], [8, 7, [2, 5]]];
const result = arrys.flat(Infinity); // flat chnage real array in one single array

console.log(result);

console.log(Array.isArray("JavaScript"));// It is check for array 
console.log(Array.from("JavaScript")); // This convert string into array

console.log(Array.from({name: "sjavascript"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));