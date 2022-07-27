//Print the tables of multiplication.
function table(x,y){
    for (let i=0;i<=y;i++){
        console.log(`${x} x ${i} = ${(x*i)}`); //${} is used to use a variable in a string without converting the variable into the string.
    }
}
table(34,10);