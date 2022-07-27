/* Write a function which will take a value and it will check 3 conditions:
1.) Number should be even.
2.) Number is a palindrome.
3.) Number should be divisible by 5.
*/
// The number should be ending with 0.
function palindrome(n){
    let num=n,reverse=0;
    while(n>0){
        let ans=n%10;
        reverse=(reverse*10) +ans ;
        n=Math.floor(n/10);
    }
    console.log(reverse);
    if (num%2===0 && num%5===0){
        reverse=reserve*10
    }console.log(reverse);
    if (reverse===num){
        return true;
    }else{
        return false;
    }
}
function check_the_number(x){
    flag=false;
    if (x%2===0){
        if (palindrome(x)){
            if (x%5===0){
                flag =true;
            }
        }
    }
    console.log(flag)
}
console.log(palindrome(0110));