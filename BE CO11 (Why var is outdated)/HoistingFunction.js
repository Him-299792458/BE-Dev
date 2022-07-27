/* Hoisting = Hoisting is JavaScript's default behavior of moving declarations to the top, in other words a variable can be used before it has been declared. (Word Hoist pe jao! wahi uska matlab bta dega.)
This happens due to lexical scoping which is a part of the compliler theory.
*/

//Function Declaration example-->
console.log(add(3,4)); // Example of hoisting of a function.

function add(x,y){
    return (x+y);
}

console.log(add(4,8));

//Hoisting doesn't work in Function Expression, Example-->

console.log(add(5,6)); //Will throw an ERROR.

let add= function (x,y){
    return x+y;
}

//The above code stab won't work due to the function being an Expression rather than a declaration.