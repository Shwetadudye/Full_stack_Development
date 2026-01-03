//Print the sum of all prime numbers between 1 and 200.
let sum =0;
for (let num=2;num<=200;num++){
    isprime= true;

     for (let i=2 ;i<num ;i++){
        if(num%i===0){
            isprime=false;  
            break;
        }
     }
        if(isprime){
            sum = sum +num;
        }

}
console.log(sum)