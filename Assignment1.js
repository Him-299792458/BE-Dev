function calculator(m,n,sign){
    if(sign==="+"){
        console.log(m+n);
    }else if(sign==="-"){
        console.log(m-n);
    }else if(sign==="*"){
        console.log(m*n);
    }else if(sign==="/"){
        let div=m/n;
        if (Number.isInteger(div)=="1"){ /*Can't use ".toFixed" universally as it will output every evaluation 
                                           with two decimal places. Therefore, had to segregate int with real #s. */
            console.log(div);
        }else{
            console.log(Number(div.toFixed(2)));
        }
    }else{
        console.log("Incorrect function")
    } /* Can't use "else" because it can't be attributed with any specific condition and will entertain 
    any input as a valid argument*/
}
calculator(4, 5, "+") // 9
calculator(3867, 9347, "+") // 13214
calculator(9, 3, "/") // 3
calculator(3, 9, "/") // 0.33  to roundOff fractional part use .toFixed(2) 
calculator(56, 89, "*") // 4984
calculator(-5, 5, "-") // -10
calculator(56, 89, "-") // -33 