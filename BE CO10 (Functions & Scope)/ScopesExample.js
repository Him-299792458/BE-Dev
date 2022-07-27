function hello(){

    console.log(a);
}
// In this scenario 'a' goes into global scope, after which 'hello()' function is called
let a=5;
hello();

/* Here, to call this function we must declare the variable 'a' before calling the function which 
we have done above. A faulty code would look like this:

hello();
let a=5;

This above code will throw an error because the variable 'a' wasn't defined prior to calling 
the function 'hello()'.
*/