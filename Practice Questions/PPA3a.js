// Write a program to reverse the order of a number given.
//My method/approach:
/*
let a=123456,reverse="";
while (a>0){
    let num=a%10;
    reverse=reverse+num;
    a=Math.floor(a/10);
}
console.log(reverse);
*/

//Official answer:
let N=123, reversedNumber=0;
while (N>0){
    let digit=N%10;
    reversedNumber=reversedNumber*10+ digit;
    N=Math.floor(N/10);
}
console.log(reversedNumber);