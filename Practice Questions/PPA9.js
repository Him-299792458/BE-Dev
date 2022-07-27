// Write a function that finds the sum of all the odd numbers betweeen 1 and N.
function SumaOdd(i,n){
    suma=0;
    for (let i = 0; i <= n; i++){
        if (i%2!==0){
            suma=suma+i;
        }
    }return suma;
}
console.log(SumaOdd(1,3));
console.log(SumaOdd(1,5));
console.log(SumaOdd(1,7));
console.log(SumaOdd(1,10));
//OR

/*
let suma=0;
function SumaOdd(i,n){
    for(i=0;i<=n;i+=2){
        suma+=i;
    }return suma
}
*/