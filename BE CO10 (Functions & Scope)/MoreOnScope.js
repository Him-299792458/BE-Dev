//Some nit-bits on Scope:

// On local scope-->
function SayHello 
{
    let a="Guddu";
    console.log("Inside The Function");
    console.log(a);
}
SayHello();
let a="Himanshu"; // The Variable 'a' has again been defined and its perfectly acceptable in case of local scope.
console.log(a); //Will not throw an ERROR.