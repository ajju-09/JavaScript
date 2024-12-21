// Asuncronous define

// Dont want to tghings in sequence
// Ability to have a pause in a language
// EX: Network calls (Calling server or data from a database then we need a puase in a language)

// Closure
// Its a one type of function
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state.

function outer() {
  let count = 4;
  return function () {
    count++;
    return count;
  };
}

let increment = outer();
// console.log(increment());

// Promises
// A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

// let response = fetchData();f
// console.log(response);

// fetchData()
//   .then((data) => {
//     console.log(data);
//     return data.toUpperCase();
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => console.log(error));

// Prototypal inheritance
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(){
  console.log(`Hello, my name is ${this.name}`);
}

let p1 = new Person('Ajju');

// p1.greet();

// This keyword and bind

const person  = {
  name: 'Ajju',
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

person.greet(); // Expected: Hi, I am Ajju

let notBindGreet = person.greet;
// notBindGreet(); // expected : undefined

let bindGreet = person.greet.bind({name: 'Jugal'});
// bindGreet(); // Expected: Hi, I am Jugal

// Call keyword
// Call usually call an object using function
//EX: 1 function calls object
  function greet(){
    console.log(`${this.animal} sleeps between ${this.timeduration}`);
  }

  let obj1 = {
    animal: 'Dogs',
    timeduration: '1pm to 8pm something.'
  }

  // greet.call(obj1);

// EX: 2 function to function call
function product(name, price) {
  this.name = name;
  this.price = price;

}

function Food(name, price){
  product.call(this, name, price);
  this.category = 'food';
}

let p2 = new Food('Butter', 67);
// console.log(p2.price);

// Apply 
// It takes array simply . It use to "apply" properties on array

let arr = [23, 45, 67, 12, 55];

let max = Math.max.apply(null, arr);
// console.log(max);

let min = Math.min.apply(null, arr);
// console.log(min);


// Async await
// It do a certain task after some time
function fetchUserData(){
  return new Promise( (resolve, reject) => {
    setInterval( () => {
      resolve({username: 'ajju', password:'#$%@&'});
    }, 3000);
  });
};

async function getUserData(){
  try {
    console.log("fetching user data...");
    let userData = await fetchUserData();
    console.log("User Data", userData);
    
  } catch (error) {
    console.log("Error ", error);
    
  }
} 

// getUserData();

// Iterator and generator
// Generator function execute one hit at a time 

function* generator(){
  yield 1;
  yield 2;
  yield 3;
}

let gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);  


