// Write aprogram to print all prime numbers less than N.
function IsPrime(num){
    let flag=true;
    for(let i=2;i<num;i++){
        if (num%i===0){
            flag=false;
            break;
        }
    }return flag;
}

let N=12;
for(let i=2;i<=N;i++){
    if (IsPrime(i)){
        console.log(i)
    }    
}
