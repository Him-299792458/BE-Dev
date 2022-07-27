//Given an integer, num. Output a pair of numbers (a,b) such that a+b=num and both a and b are prime numbers.
//Incase multiple pairs exist for a num, output ANYONE of them.

//Solution-->
function Isprime(n){
    if (n===1) return false;

    for(let i=2;i<n;i++){
        if (n%i===0) return false;
    }
    return true;
}

function Pairprime(num){
    //You have been asked to find (a+b)=num;b= num-a... Zabardast bhai, dimaag ke ghode khule rakho bro!
        for(let a=2;a<num;a++){
        let b=num-a;
        if (Isprime(a) && Isprime(b)){
            return [a, b];
        }
    }return "no Output";
}
console.log(Pairprime(15));
console.log(Pairprime(4));
console.log(Pairprime(13));
console.log(Pairprime(17));
console.log(Pairprime(11));