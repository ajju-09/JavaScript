// Strings are immutable

let str = "Java Script";

console.log(str[4]);
console.log(str.length);

// Templete literals 
let str2 = `This is a templates.`;
console.log(str2);

let obj = {
    item : "Pen",
    Price : 230,
}
let output = `The cost of ${obj.item} is ${obj.Price} ruppes`; 
// ${paceholder} this syntax is knows as string interpolation
console.log(output);

// String Methods
 console.log(str.toUpperCase());
 console.log(str.toLowerCase());
 console.log(str.trim());

 const name = new String('Ajju01');
 for(let newName of name){
 console.log(newName);
 }
 console.log(name[0]);
 console.log(name.__proto__);

 let newString = name.substring(0, 2);
 console.log(newString);

 let url = "https://github.com/github%20repo"; // %20 show space between two words 
 console.log(url.replace("%20", "-"));

 let firstName = "Ajju-09-com";
 console.log(firstName.split("-"));

