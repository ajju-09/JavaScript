//Immediately Invoked Function Expressions (IIFE)
// IIFE help from preventing from globle scope pollution variables

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Jugal");