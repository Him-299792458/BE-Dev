// Few important methods of objects:

// 1.) freeze:
const tempObj= {name:'Himanshu'};

Object.freeze(tempObj); //Object is now frozen and thus can't be changed.
console.log(tempObj);
//trying to change the object-->
tempObj['age']=78; // Introducing new keys to the object won't work once the object has been frozen.

tempObj['name']='Harsh'; //Even reassingnment doesn't work once the object has been frozen.

console.log(tempObj); //No changes will occur and this function will return the same value as the previous one.

console.log(Object.isSealed(tempObj));
// It is recommended to use const to an Object which is about to be freezed instead of using let declaration, using which will render the object unamendable.



// 2.) seal:
const tempObj2={Name: 'Harsh', Age:26};
Object.seal(tempObj2); //Object is now sealed.

//trying to change the object:

// Reassigning the values of the existing keys of the object--> seal will let you reassign values of declared keys.
tempObj2['Name']='Guddu V Sr.'
tempObj2['Age']= 10000000000;

// Introducing new key value pair to the existing object--> seal will not let you append new keys to the object.
tempObj2['State']='Guddu Nadu';

console.log(Object.isSealed(tempObj2)); // Will print a boolean value, has been explained in the PDF.
console.log(tempObj2);


const obj1={Name:'Himanshu'}
console.log(Object.isSealed(obj1)); // Will return false as it has neither been sealed nor been frozen.

