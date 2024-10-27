let myDate = new Date();

console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let createdDate = new Date(2023,0,14);
console.log(createdDate.toString());


let timeStamp = Date.now();
console.log(timeStamp);
console.log(createdDate.getTime());

console.log(Math.floor(timeStamp/1000)); // Use floor method to avoid decimal time

console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getHours());