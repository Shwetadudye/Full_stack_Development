//Print all palindrome numbers between 1 and 500.

for (let num=1 ;num<=500;num++){

    let original= num;
    let temp= num;
    let reverse=0;

    while(temp>0){
        let digit = temp % 10;
        reverse = reverse*10+digit;
        temp= Math.floor(temp/10);

    }
    if(reverse===original){
        console.log(original);
    }
    
}