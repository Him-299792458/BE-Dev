// Write a program to check whether a number is a palindrome or not.
// A number is considered as a palindrome if it reads the same from left to right as from right to left.
function palindrome(num){
    let reverse=0,flag=num;
    while (num>0){
        let a=num%10;
        reverse=reverse*10+a;
        num=Math.floor(num/10);
    }
    if (flag===reverse){
        return true
    }else{
        return false
    }
}
let xyz=0110;
console.log(palindrome(xyz));