// Write a program to print the fibonacci sequence till less than N.
let N=7,n1=0,n2=1,nextnum;
for (i=1;i<N;i++){
    while(n1<N){
    console.log(n1);
    nextnum=n1+n2;
    n1=n2;
    n2=nextnum;
    }
}