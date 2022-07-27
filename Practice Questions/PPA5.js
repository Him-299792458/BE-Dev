// To find the maximum value amongst the three given values.

function Ismax(m,n,o){
    if (m>n && m>o){
        return m;
    }else if (n>m && n>o){
        return n;
    }else{
        return o;
    }
}
const a=12,c=23,b=34;
console.log(Ismax(a,b,c));