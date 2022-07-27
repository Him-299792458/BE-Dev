// Function is very beautiful


helloWorld(); //Works fine even when written before writing the function.
var1();// Throws an error, as the function is yet to be initialised, There4 can only be used after writing the function.


//function statement:
function helloWorld(){
    console.log('Hello World');
}

helloWorld();


//function expression:
let var1= function functionExpression(){
    console.log("Hello World from Expression")
};

var1();


// Issues related to scoping:

let temp1=5; //Part of global scoping as it is not part of any block variable(any variable introduced within {}).

function HelpMe(){
    let temp1=1; //Local scoping, only available to this block of code,i.e, HelpMe(), not available outside the blocked code.
    let temp2=2;
    console.log(temp1,temp2);
}

console.log(temp1); //Will print the variable which is part of the global scoping.
HelpMe(); //Will print temp1 value which has been provided within the coded block and will not consider the global scoping variable temp1 whose value is 5.

//Global variables can be used in a blocked code without introducing the same within the blocked code itself.


// Anonymous funtions:

let abc=function(){
    console.log(`Guddu V T J!`);
}
abc();