// Write a program to print the digits of a number in any order.
let num=12345;
while (num>0) {
    let a=num%10;
    console.log(a);
    num=Math.floor(num/10);
}
/* or
let num=12345;
let n=num.toString();
let len=n.length;
for(i=0;i<len;i++){
    console.log(n[i]);
}
*/