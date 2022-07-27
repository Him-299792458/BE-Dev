function SayHello()
{
    {
        let a="Guddu";
        console.log(a);
    }
    console.log(a); //This will throw an ERROR, as variable 'a' has been locally declared inside a {}.
    /*
    --> Even though i'm still inside the function body, i'm outside of the local scope.
    Hence, variable 'a' is not accessible.
    */
}
SayHello();

//To better understand, here's another example-->
{
    let b ="Guddu VTJ";
}
console.log(b); //ERROR as 'b' has been defined in a local scope so it isn't available Globally for the entire code stab.