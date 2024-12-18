// Lexical Scoping means all children func() have access of parents func() but parent func() does not have any access of child func().

// Example:

// Parents function
function outer(){
    let some = 'something';

    // child function
    function inner(){
        let some2 = "something again";
        console.log(some);
    }
    // console.log(some2);// Parent does not access child variables or scope
    

    inner();
}
outer(); // Output : something
// console.log(some); // Throws error
