//Write a program to check whether a given number is prime or not.
let num=99; //Enter the input here!
let flag=true;
for(let i=2;i<num;i++){
    if (num%i===0){
        flag=false;
        break;
    }
}
console.log(flag);