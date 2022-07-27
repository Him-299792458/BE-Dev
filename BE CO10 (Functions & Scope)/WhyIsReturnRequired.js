// 'return' enables the output to be used in other operations as well whereas printing an output of a function will render the result of the function useless in terms of operationability.
//Example of using return:
let xyz= function(x,y){
    return x*y;
};
console.log(xyz(5,4));
console.log(xyz(5,4)+xyz(9,5)); //arithematic operation done here.

//Example of not using return:
let zyx= function(m,n){
    console.log(m*n);
};
zyx(6,5);
zyx(5,5)+zyx(2,9); //This arithematic operation isn't executed, instead the result of both the arguments are printed out in seperate lines in the terminal,i.e., 5*5=25 and 2*9=18.
//While using return, the result comes back to the caller and is as such not executed in the terminal.