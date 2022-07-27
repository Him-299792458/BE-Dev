function isPrime(num){
    for (i=2;i<num;i++){
        if (num%i===0) return false;
    }return true;
}
console.log(isPrime(15));
// This is a better way to return a boolean value after a complete itiration. Don't have to declare a 'flag'.