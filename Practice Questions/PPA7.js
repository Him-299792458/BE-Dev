// Minimum Lectures to achieve 75%.
const m=7,n=1 //,m=Total lectures, n=Lectures attended.
function LecToAttend(x,y){
    let a= Math.ceil(x*0.75)
    if ((m-n)>=(a-n)){
        return (a-n)
    }else{
        return ("Game Baj Gaya Shaane!")
    }
}
console.log(LecToAttend(m,n))