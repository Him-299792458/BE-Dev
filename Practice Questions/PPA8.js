// Quadratic Equation.
/* Some general concepts of Quad. Eq.--> Determinant= ()
1.) If Determinant is 0, Both the solution are real and equal. (-b/2a)
2.) If Determinant !=0, both the sol. are different. (-b(+-)(b**2-4ac)**1/2)/2a
3.) If Determinant is -ve, solutions are not real.
*/
var a=1,b=-8,c=16;
x=((b**2-4*a*c)**0.5);
y=(-b + (b**2-4*a*c)**1/2)/2*a;
z=((-b - (b**2-4*a*c)**1/2))/2*a;
if(x===0){
    console.log(-b/2*a, -b/2*a);
}else if(x>0){
    console.log(y,z);
}else{
    console.log("undefined");
}