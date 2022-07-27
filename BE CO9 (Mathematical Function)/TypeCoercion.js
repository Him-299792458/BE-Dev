/*
-- "+" (operator)sign has two purpose:
1.) Addition operation
2.) Concatenation operation
*/

// TypeCoercion refers to automatic conversion of values from one data type to another data type.
//Examples-
//1.)Number to String data type.
//2.)String to number data type
//3.)Boolean to Number data type and so on.

//Examples of addition and concatenation operations respectively:
console.log(3+4); //Addition -- Number(DT) + Number(DT)
console.log("Hello"+"Guddu"); //Concatenation -- String(DT) + String(DT)


//1.) Type coercion for Number and a String:
console.log(3+"4"); //Concatenates and changes the output DT to string. -- Number(DT) to String(DT)
//Output: 34(string DT)

//2.)Type coercion for boolean and a string:
console.log(false+"Guddu"); //Concatenates and changes the output DT to string. -- Boolean(DT) to String(DT)
//output: falseGuddu(string DT)

//3.) Type coercion of string to number:
console.log(10-"2"); //Number -(minus) String
//Output: 8 (JS is converting the string "2" into a number and performing the arithematic operation.)
console.log(10 *"2");
console.log(9%"2");
console.log(10/"2");
//Output: All Strings have been converted into Number and operations have been done accordingly.

/* for "+" mathematical operator: Number gets converted into String.
   for "-,%,*,/" mathematical operators: String gets converted into Number.
*/


//4.) Type coercion of boolean to Number:
console.log(false / 3); //Here false(boolean) gets converted into number(false==0; true==1).
//output: 0(for *,/), 3(for +,-).
