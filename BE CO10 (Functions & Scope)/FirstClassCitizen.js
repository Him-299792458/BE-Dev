/* There's an alternative way of writing a function.
-->It is done by assigning functions to a variable.
In JS, functions are "High-Ordered Functions",i.e., as written above, functions can be assigned to variables.
*This is the reason why functions in JS are also known as First Class Citizens.
*/


let xyz= function(x,y){  //Here, a function is assigned to a variable 'xyz'.
    return x+y;
}
console.log(xyz(5,4));