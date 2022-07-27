// Function to print minimum and maximum of single array.

//Solution:

function minimaxi(arr){
    let mini=100000;
    let maxi=-1;
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i];
        }
        if(arr[i]<mini){
            mini=arr[i];
        }
    }return `The minimum is ${mini} and the maximum is ${maxi}`; // Interesting point to be observed here is that you cannot call on two variables by using return function as only the last variable will get printed, you need to use an array format to print two or more than two variables in one single return function.
}
let arr1=[23,34,45,56,-1];
console.log(minimaxi(arr1));