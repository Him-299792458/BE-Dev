//Type of output of a switch when break isn't used during the compilation of case.
//Here there are no break response to terminate the cases.
let response="Yes";
switch(response){
    case "Yes":
        console.log("Sahi hai Bhidu!"); 
    case "No":
        console.log("Maushi chi gaand!"); 
        //if I write "break" here, fall through would execute every print statement succeeding this break.
    case "Maybe":
        console.log("Kya bolta hai Bhidu"); //----
    default:
        console.log("VTJ") //----
}

//Output will be every print statement until the program finds a break in any line.
//Alag alag jagah single break lagake dekh lo results for better clarity!