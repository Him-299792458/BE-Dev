function checkeven(x){
    if (x%2==="0"){ // Here "0" is false and not the number, as JS interprets 0s as false and 1 as true. Here the result will be opposite to what is intended due to the use of "0" instead of 0.
        //If we use the number 0, then it will be considered as a mathematical opertion.
        console.log("Even Number");
    }else{
        console.log("Odd Number");
    }
}
checkeven(10);
