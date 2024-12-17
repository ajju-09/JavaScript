function multiplyByfive(num){
    return num*5;
}

multiplyByfive.power = 2;
console.log(multiplyByfive(5));
console.log(multiplyByfive.power);
console.log(multiplyByfive.prototype);

function createUser(name, price){
    this.name = name;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);             
}

const chai = new createUser('Chai', 25);
const tea = createUser('tea', 250);

chai.printMe();

const heros = ['Ironman', 'hulk', 'Captain America'];

const heroPowers = {
    Ironman: 'mind',
    Hulk: 'Strength',
    Captain: 'sheild'
};

Object.prototype.print = function () {
    console.log(`All hero have powers`);
};

Array.prototype.copy = function () {
    console.log(`Heros have more powers`);
};

heros.print();
heroPowers.print();

heros.copy();
// heroPowers.copy();

// Inheritence
 
let user = {
    name: 'kuchbhi',
    email: 'kuchbhi@gmail.com'
};

let teacher = {
    makeVedio: true
};

let teacherSupport = {
    isAvailable: false
};

let TASuppot = {
    makeAssignment: 'JS',
    fullTime: true,
    __proto__: teacherSupport,
};

teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(teacherSupport, teacher);

let username = "Common    ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

username.truelength();
"Jidanbo ".truelength();
