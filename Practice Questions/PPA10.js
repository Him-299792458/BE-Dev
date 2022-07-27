//Write a program to find the GCD || HCF of 2 numbers.
let n1=80,n2=120,a=0;
for (i=2;i<=n2;i++){
    if (n1%i===0 && n2%i===0){
        a=i;
    }
}
console.log(a);

//scope ka dhyan rakho, identation ke andar local scope ho jayega toh humesha 'a' jaise variables ko pehle hi declare kar diya karo.