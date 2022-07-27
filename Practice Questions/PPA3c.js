// Write a program to write all the palindromes between 1 and N.
function palindrome(num){
    let reverse=0,flag=num;
    while (num>0){
        let digit= num%10;
        reverse=reverse*10+digit;
        num=Math.floor(num/10);
    }
    if (flag===reverse){
        console.log(reverse);
    }
}
let N=200;
for(let i=1;i<=N;i++){
    palindrome(i);
}