// To find the order of the numbers given, whether they are ascending or descending or none of the two.
function Isarrange(m,n,o){
    if (m>n && n>o){
        return ("Descending");
    }else if(o>n && n>m){
        return ("Ascending");
    }else{
        return ("None of the two");
    }
}
const a=1,b=1,c=1;
console.log(Isarrange(c,b,a));