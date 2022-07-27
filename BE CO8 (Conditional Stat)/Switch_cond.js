// Similar to the way customer service prompter responds. Press 1 for... Press 2 for...
//Here the digit preceded by "case" is the value of choice.


let choice=3; //This is the number which the user will be entering which corresponds to the case number.
switch(choice){
    case 1: //Press 1 for English
        console.log("You've selected English!");
        break;
    case 2: //Press 2 for...
        console.log("You've selected Mandarin")
        break;
    case 3:
        console.log("You've selected Guddu Bhasha")
        break;
    default: //for choices/input other than mentioned as cases. Doesn't require a break cmd.
        console.log("Guddu VTJ! Galat No. mat dba!")
}

// You can also use string instead of number DT. Use "" if you want to use string.