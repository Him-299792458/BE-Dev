// Write a program to take two variables a and b. Output 1, if a is less than b. Output 0, if b is less than.
//Used for simple conditional arguments.

/*format:
(Test_condition) ? to_be_executed_when_true : to_be_executed_when_false */

let a=10, b=11;
console.log((a<b) ? 1:0); // here 1:0 are outputs for True:False conditions.

//another way
let x=51, y=10, z=(x<y)? 1:0
console.log(z)

//Test question:
let m=20,n=10,o=(m>n)?((n>m)?20:-1):15;
console.log(o) //should print -1 as there's a condition in the True column of the first operator.