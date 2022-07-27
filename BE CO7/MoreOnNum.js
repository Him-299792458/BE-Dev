let num=4; //int input
console.log(num);
console.log(typeof num)


let nu=4.98; //float input.
console.log(nu)
console.log(typeof nu)


// both int and float are of 'number' datatype.

let n= 3e9; //Exponential number.((e=10)^the no. followed by it). In this case 3*10**9. 
console.log(n);
console.log(typeof n);


let m= 4567; //Conversion to exponential notation. (4.567e+3===4.567*10**3)
console.log(m.toExponential());
console.log(typeof m);

//Special Number:

//1.) Infinity
let numb=4/0;
console.log(numb);
console.log(typeof numb);

//2.) -ve Infinity
let numbe=4/-0;
console.log(numbe);
console.log(typeof numbe);

//3.) NaN --> Not a Number.
let number= undefined +1;
console.log(number);
console.log(typeof number);

