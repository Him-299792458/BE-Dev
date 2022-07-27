// To find Minimum and Maximum in an Array.


//Solution to find minimum in an array-->
let numArray=[12,3,0,-1,15,4221];
let mini=0;
for(i=0;i<numArray.length;i++){
    if(numArray[i] < mini){
        mini=numArray[i];
    }
}
console.log(mini);

// Solution to find maximum in an array-->
let numArray2=[12,3,0,-1,15,4221];
let maxi=-1;
for(i=0;i<numArray2.length;i++){
    if(numArray2[i]>maxi){
        maxi=numArray2[i];
    }
}
console.log(maxi);