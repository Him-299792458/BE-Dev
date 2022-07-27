let a=1;
while (a<101) {
    if (a%3===0){
        console.log("Relevel");
    }
    if (a%5===0){
        console.log("Buzz");
    }
    if (a%15===0){
        console.log("6indBuzz");
    }
    else{
        console.log("0")
    }
    ++a
}
/* The code prints all the three inputs when there is an intersection of factors in the above case.
example @ multiples of 15. */