//2.) Local Scope-->

function SayHello()
{
    let a="Himanshu";
    console.log("Inside The Function");
    console.log(a);
    /*
    --> The Variable 'a' is defined inside the function body and has a local scope.
    --> Within the function body itself, it is NOT accessible outside the function body.
    */
}
SayHello();
console.log(a); //This will throw an ERROR.