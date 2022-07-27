// Recursion:

function callMeBack(num){
    console.log(num++);
    if(num==10) return 0; // Logic: As soon as the variable 'num' hits 10, The function stops by returning the value 0 which cannot be printed dur to lack any printing function.
    else{
        callMeBack(num++);
    }
}
callMeBack(0);

//In this code, using any integer >10 will initiate an infinite print as the variable num would never have the value 10 and thus will never sieze to itirate itself.
console.log(`New code`);
//The same code of recursion in a more simplified manner-->

let numa=10;
for(i=0;i<10;i++){
    console.log(i);
}
