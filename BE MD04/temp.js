let numArray=[1,2,-1,4,5];
let maxi=numArray[0];
for(i=0;i<numArray.length;i++){
    if(numArray[i]<maxi){
        maxi=numArray[i];
    }
}
console.log(maxi);