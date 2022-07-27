// variable type "let" lets you reassign value. It is a true variable. But only lets u initiate the variable once.
let a="Shahid Kapoor";
console.log(a);
a="kaminey";
console.log(a)


// variable type "const" does'nt let you reassign the variable. It's identical to Mathematical constant.
 const b="Srk";
 console.log(b);
 /*b="KRK"; // error maarega iske wajah se agar isko comment out nahi kiya toh!
 console.log(b); */

 /* const can be used in objects and arrays and even then keys and elements respectively can be added to any of
 the declared variables using the const function. Example for this can be seen below: */
 
 // For Object:
 const permanentObj={name:'Himanshu'};
 permanentObj['age']=25;
 console.log(permanentObj); // Here the new key will be appended to the object('permanentObj') even though it's declared using a const.
 // For Array:
 const permanentArray=[1,2,3,4,5];
 console.log(permanentArray);

 permanentArray.push(10); //Appending a new value to the existing array!

 console.log(permanentArray); // This will give an output which includes the appended value even though the it's declared using a const.S

