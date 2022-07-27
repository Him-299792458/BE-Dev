// Write a program to check whether a given number is an Armstrong number.
// A number is known as an Armstrong number if sum of cube of digits of the number is equal to the number itself.
// Example: 153= (1^3+ 5^3 + 3^3)
let num=370,sum=0,flag=num; //Here flag is required to keep the actual value of num intact which otherwise due to the below itiration will change and thus won't be available for comparison later on.
while (num>0){
    let a=num%10;
    sum+=Math.pow(a,3);
    num=Math.floor(num/10);
}
if (sum===flag){
    console.log('true');
}else{
    console.log('false');
}