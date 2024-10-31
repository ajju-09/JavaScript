for(let i=0; i<10; i++){
    console.log("Its a Loop");
}

let sum=0;
for(let i=1; i<=5; i++){
    sum = sum + i;
    console.log("Sum =",sum);
}

// While loop
let num = 1;
while( num <= 10){
    console.log("Its a while loop");
    num++;
}


// Do while loop
let i = 20;
do{
    console.log("Its a Do While Loop");
    i++;
}while( i <= 10);


// For-of loop is use in string and array
let str = "JavaScript";
let size = 0;
for(let name of str){
    console.log("i = ",name);
    size++;
}
console.log("Number of Char =", size);

// For-in loop is use for object
let student = {
    name: "Rahul",
    age: 45,
    cgpa: 7.4,
    isPass: true,
};

for(let data in student){
    console.log(`Info = ${data} data = ${student[data]}`);
}



