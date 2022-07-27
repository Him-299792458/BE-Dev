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




// More on map:
// use in function-->
function population(arrayState){
    return arrayState.map((element, index)=>{ //We can't use forEach instead of map as the former will return an undefined output.
        return `Index ${index} - In ${element.Name} population is ${element.population}`
    });
};
console.log(population(nestedObj.populationofStates));

//How to interact with objects:
