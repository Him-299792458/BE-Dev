//Write a mathematical table using recursion and not a for loop.

function tables(num,i){
    if(i>10)return 0; //exiting from the loop.
    else{
        console.log(`${num} * ${i} = ${num*i}`);
        i++; //incrementing the value of i
    }
    tables(num,i);
}
tables(13,0);