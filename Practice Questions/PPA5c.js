//Write a program to find the Nth Fibonacci number.
function fibo(num){
    if (num===1) return 0;
    else if(num===2) return 1;
    else{
        let f=0;
        f=fibo(num-1)+fibo(num-2);
        return f;
    }
}
console.log(fibo(3));