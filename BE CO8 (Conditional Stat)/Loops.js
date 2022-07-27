// Three types of loops:

//1.) for loop: for(initialization;condition;assignment)
// First 10 natural numbers using for loop.
for (let i=1; i<=10 ; i++){ //(Entry controlled loop, same as while loop.) Fancier way of writing a while loop.
    console.log(i);
}


//2.) While loop: (Entry controlled loop, condition is checked before commencing the iteration.)

let i=1;
while(i<=10){
    console.log("Teri gaand mein danda de!");
    i++;
}


//3.) Do-While loops: (Exit controlled loop, condition is checked after the iteration is complete.) Gets executed at least once unlike for or while loop which can't be iterated if conditions don't match.
let j=1;
do{
    console.log("Porkistani MC!");
    j++;
}while(j<=10);
// check the logic as post script is being used.