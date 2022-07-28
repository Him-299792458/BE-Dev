//Sort lagani hai!
//Two types of sorting--> 1.) Ascending (2.) Descending
//Functions used are--> reduce,filter,sort

//1.) sort function:
let tempArray=['Banana','Apple','Apricot','Orange'];

let sortedArray= tempArray.sort();
let reverseArray= tempArray.reverse();

console.log(sortedArray);
console.log(reverseArray);

//Sorting in Ascending order:

function sorta(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){ //Changung the sign will change the order of display for the array.
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]) return sorta(arr);
    }return arr;
}

//Sorting in descending order:
function sortd(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){ //Changing the sign will change the order of display for the array.
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }for(i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]) return sortd(arr);
    }return arr;
}

//Testing:
let set=[23,65,34,88,12,-1,-234,11,56];
console.log(sorta(set));
console.log(sortd(set));