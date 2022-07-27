//How to access Elements of Object:
//Template code for reference-->
let nestedObj={
    listOfMetroCities:['Delhi','Bangalore','Chennai','Kolkata'],
    TopCrickerterinCountry:['Sachin','Kohli','Rohit','Thala'],
    populationofStates: [                       //Line 6 to 11 is Array of objects, not mentioned in 'object.js' yet explained.
        {Name:'Karnataka',Population:'2M'},
        {Name:'Delhi',Population:'3M'},
        {Name:'UP',Population: '10M'},
        {Name:'Tamil Nadu', Population: '5M'},
    ],
    countryCode:{
        Name:'IN',
        detailedName:'India',
        popularLanguage:[
            'Hindi',
            'Assamese',
            'Bhojpuri',
            'Marathi',
            'Bengali'
        ]

    }
    
}
//Using forEach loop:
nestedObj.populationofStates.forEach((ele,index)=>{
    console.log(
        `Index ${index} - In ${ele.Name} population is ${ele.Population}`
    ); //here if we use return value for code, it will return 'undefined', so we must use the print method instead.
});
//using return instead of directly printing:
let forEachValue= nestedObj.populationofStates.forEach((ele,index)=>{
    return `Index ${index} - In ${ele.Name} population is ${ele.Population}`;
});
// Here see line 28, use declared variable(ele) and only then use specific variables present in the object.

//Using map() method:
nestedObj.populationofStates.map((element, index, array)=>{
    console.log(
        `Index ${index} - In ${element.Name} population is ${element.Population}`
    );
});
//using return instead of directly printing:
let mapValues= nestedObj.populationofStates.map((element,index)=>{
    return `Index ${index} - In ${element.Name} population is ${element.Population}`;
});

console.log(forEachValue); //Will return 'undefined as already mentioned.
console.log(mapValues); // Will return a list of the result.


