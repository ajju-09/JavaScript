// Objext Literals

const mySmb = Symbol("key1");
const jsUser = {
    fullname: "Ajinkya Awachar",
    "company": "Infosys Limited",
    [mySmb]: "mykey1", // Assecsing symbol using square bracet
    age: 23,
    email: "ajinkyaawachar@gmail.com",
    location: "Surat",
    isLoggedIn: true,
} 

//console.log(jsUser.email); // using . operator we cannot use company bcoz its in string form
//console.log(jsUser["email"]); //using square bracet we can use company bt need to add "" 
// console.log(jsUser[mySmb]);

// Override any value using = operator
jsUser.location = "Delhi";
//Object.freeze(jsUser); // This method freeze object means no further changes in object
jsUser.location = "Surat";
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello Peoples");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello Peoples, ${this.fullname}`);
}
// console.log(jsUser.greetings);
// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());

// const tinder = new Objects(); // Singleton object
const tinder = {};
tinder.id = "123abc";
tinder.name = "something";
tinder.isLoggedIn = false;

// console.log(tinder);
const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ajinkya",
            lastname: "Awachar",
        },
    },
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

// const obj3 = Object.assign({}, obj1, obj2); // assign(target, source)
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const Users = [
    {
        id: 123,
        email: "gg@gmail.com",
    },
    {

    },
]
// console.log(Users[0].email);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedIn'));// This method is use to check for key is present or not

const course = {
    courseName: "Javascript",
    price: 999,
}

const {courseName: name } = course;
console.log(name);



