// Q1
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let mark of marks){
    sum += mark;
}
let avg = sum / marks.length;
console.log(avg);

// Q2
let items = [250, 645, 300, 900, 50];

let i=0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}