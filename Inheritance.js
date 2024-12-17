class animal{
    constructor(name){
        this.name = name;
    }

    logMe(){
        console.log(`Name of animal ${this.name}`);
        
    }
}

class subAnimal extends animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }

    toEvolved(){
        console.log(`Evolved animal name is ${this.name} and age is ${this.age}`);
    }
}

const lion = new subAnimal('Lion', '45');
const cat = new animal('cat');
lion.toEvolved();
cat.logMe();

console.log(lion === cat); // false
console.log(lion === subAnimal); // false

console.log(lion instanceof subAnimal); // true
console.log(cat instanceof animal); // true
console.log(animal instanceof subAnimal); // false
console.log(subAnimal instanceof animal); // false




