// Instead of writing and printing elements seperately, array can be used instead to store all such data inclusively
//Example-->

let city1="delhi";
let city2="Mumbai";
let city3="Guwahati";
let city4="Patna";
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//Use of Array to reduce dependencies:

let cities=["Delhi",'Mumbai','Guwahati','Patna'] //Here these cities are not variables, 'cities' is a variable.
// let cities=[             Another way to write arrays.
//     "Delhi",
//     'Mumbai',
//     'Guwahati',
//     'Patna'
// ]
for(i=0;i<= cities.length -1;i++){
    console.log(cities[i]);
}

//The type of an Array is --> object