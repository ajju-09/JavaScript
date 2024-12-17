const obj = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(obj);

const obj1 = {
    name: 'Java Course',
    price: 230,
    isAvailable: true,

    order: function(){
        console.log('Ordered chai');
    }
};

console.log(Object.getOwnPropertyDescriptor(obj1, 'name'));

// Object.defineProperty(obj1, 'name', {
//     writable: false,
//     enumerable: false
// });
// console.log(Object.getOwnPropertyDescriptor(obj1, 'name'));

for (let [key, value] of Object.entries(obj1)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}
