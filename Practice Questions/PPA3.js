// Find if a person is eligible to vote or not.
function IsVote(n){
    if (n>18){
        return true;
    }else{
        return false;
    }
}
const a=19;
console.log(IsVote(a));