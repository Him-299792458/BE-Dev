// Write a program to calculate the sum of the digits of a number.
let num= 12345,sum=0;
while (num>0){
    let a=num%10;
    sum+=a;
    num=Math.floor(num/10);
}
console.log(sum);
