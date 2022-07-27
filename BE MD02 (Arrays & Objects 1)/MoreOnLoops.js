// Difference between for and forEach.


let tempArr=[100,12,13,124,15];

//for:
// for(i=0;i<tempArr.length;i++){
//     console.log(tempArr[i]);
// }

//forEach:
tempArr.forEach((element) => {
    console.log(element);
})
    //or
[1,2,3,4,5].forEach(function(e){   // 
    console.log(e);
});