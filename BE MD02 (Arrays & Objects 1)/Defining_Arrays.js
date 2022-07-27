// How to define Array:

let tempArray= ['element1','element2',3];
let tempArray2= new Array('element1','element2',2); /*Here we can't use single integer without using [].
so we can write a single integer array as-->
let tempArray2= new Array([2]); and not--> let tempArray2=new Array(3);
The later one will lead you to the third form of declaring the array which is already explained in the varibale 
tempArray3 example in the next method just below this.
*/
let tempArray3= new Array(10); // gives the array length of the integer declared, here, 10 empty items/elements.
let defaultArray=[]; // undefined array. 



// How we can add value to array:(Methods to be used on arrays)
tempArray.push('New Element');

//pop - Always delete and return last element.
let deletedElement= tempArray.pop(); // will delete the last element from the given array.

console.log(deletedElement); // Here, it will display 'New Element' as it was the last element of the array(tempArray)
console.log(tempArray);

// How to filter arrays:
// (We have already written the methods used in the word doc. Please refer to it.)

//We will write our function which will be finding the value of index.
function FindValueAtIndex(arr,index){
    if(index>=0) return arr[index];
    if(index<0) return arr[arr.length- Math.abs(index)]; //Logic samjha iska gadhe?
}
let abba=[5,4,3,2,1];
console.log(FindValueAtIndex(abba,-2));


//Appending and specific indexing in array:
let arr=[10,29,38];
console.log(arr);

//After altercation-->
arr[-189]=990; //-ve indexing gives specific index value to the array without increasing the length of the array.
console.log(arr);
console.log(arr.length);


arr[123]=67; //+ve indexing appends the array upto the integer which has been used as an index,thus increasing the length of the said array. This can be also used to alter the value of elements in any of the already given element of the array.
console.log(arr);
console.log(arr.length);