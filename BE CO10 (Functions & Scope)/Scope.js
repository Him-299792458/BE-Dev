// Scope of a variable is a concept which introduces us to the availability of the variable in the entire code.
/*There are two types of Scopes:
1.) Global Scope. (Available outside and inside the function for itiration.)
2.) Local Scope. (Available only inside a specific function or otherwise. VAriables are restricted by {})

let us take an example to illustrate both these types of Scope-->
*/

//1.) Global Scope-->

let a="Himanshu";
function SayHello(){
    console.log("Inside the function");
    console.log(a);
    /* Although variable 'a' is outside thjje function body, it is still accessible inside the function. 
    This concept is known as the "Global Scope".
    The variable 'a' is part of the global scope,i.e. it is accessible from everywhere.
    */
}

SayHello();
console.log("Outside The Function");
console.log(a);