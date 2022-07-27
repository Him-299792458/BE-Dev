//Write a program to draw a triangle whose base is N.
let N=5;
for(i=1;i<=5;i++){
    let space="";
    for(j=1;j<=5-i;j++)
    {
        space=space+" ";
    }
    let star="";
    for(j=1;j<=i;j++) //If you change the parameter from j<=i to j<=5; you'll get a paralellogram instead.
    {
        star+="* ";
    }
    console.log(space+star);
}