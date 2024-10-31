// Map is a object in js which holds key value pairs with no duplication of values
const map = new Map();

map.set("GJ", "Gujarat");
map.set("MH", "Maharashtra");
map.set("RJ", "Rajashtan");
map.set("UK", "Uttrakhand");
map.set("GA", "Goa");

// console.log(map);

for (let [key, value] of map) {
  // [ 'GJ', 'Gujarat' ] for preventing this type output we use this type of syntax in loop
  console.log(key + " :- " + value);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = num.map((nm) => {
//   return nm + 10;
// });
// console.log(newNum);

// Filter

const table = [
  {
    name: "gg",
    year: 2000,
    age: 26,
  },
  {
    name: "Bunty",
    year: 2003,
    age: 21,
  },
  {
    name: "Sam",
    year: 1978,
    age: 45,
  },
  {
    name: "Nilam",
    year: 1992,
    age: 67,
  },
];

// const newTable = table.filter( (tb) => tb.year >= 2000);
// console.log(newTable);

// const newTable = table.filter( (tb) => {
//     return tb.year >= 2000 && tb.age >= 25;
// });

// console.log(newTable);

// Chaining

const chain = num.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40);

console.log(chain);
