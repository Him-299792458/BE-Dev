// Program to check if a number is odd or even:
function isEvenOdd(n){
    if (n>0){
        if (n%2===0){
            return ("Even");
        }else{
            return ("Odd");
        }
    }else{
        return ("Not Applicable");
    }
}
let a=-19987; //input the value here to check.
console.log(isEvenOdd(a));