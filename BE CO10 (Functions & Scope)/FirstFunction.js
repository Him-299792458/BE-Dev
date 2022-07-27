// "function" is a keyword.
//function follows the DRY programming notion,meaning,Don't Repeat Yourself.
// "sayHello" is the name of the function. And it is an identifier and it follows all the rules of an identifier.
// Functions in JS are known as "First Class Citizens".
function sayHello(params) {
    console.log("Hello",params);
    console.log("Bol Bhai");
    console.log("Bye Bhai");
}
sayHello("Guddu!");
sayHello('V');
sayHello("Porkistan");
sayHello("Hehohahaha");


//Math.pow(2,3) => 8(Output)

function add(x,y){
    console.log(x+y);
}
add(3,4);


function subtract(x,y){
    console.log(x-y);
}
subtract(1,100);