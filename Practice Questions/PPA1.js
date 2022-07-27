//Program to check if a number is a perfect square.
function isSquare(n)
{
    if (n<0){
        return false;
    }
    else{
        if (Number.isInteger(Math.sqrt(n))){
            return Math.sqrt(n)
        }else{
            return false;
        }
    }
}
let no=10;
console.log(isSquare(no));