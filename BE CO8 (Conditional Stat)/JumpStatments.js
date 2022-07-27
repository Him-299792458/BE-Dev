// There are two types of jump statements- break and continue.

//1.) break:

for(i=0;i<=5;i++){
    if (i===3){
        break; //breaks the iteration and comes out of the loop when i ===3.
    }
    console.log(i);
}
console.log("Khatam ho gaya Vro!");

//2.) Continue:

for(j=0;j<=5;j++){
    if (j===3){
        continue; //moves you to the next iteration,skipping the rest of the code. Here it'll skip the output code when j===3, matlab 3 display nahi hoga gendu!
    }
    console.log(j);
}
console.log("Khatam ho gaya Vro!");