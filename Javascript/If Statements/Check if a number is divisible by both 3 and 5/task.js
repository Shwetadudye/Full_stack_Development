 let num = 45 ;
    

    if(num % 3===0 && num %5 ===0){
        console.log(num + " is divisible by both 3 and 5");
    }
    else if(num % 3 ===0){
        console.log(num + " is divisible by 3");     
    }
    else if (num %5 ===0){
        console.log(num +"is divisible by 5");
    }
    else{
        console.log("num is not divisible by 3 and 5")
    }