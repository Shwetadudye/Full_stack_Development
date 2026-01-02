//Check if a given number is prime using loops

let num = 3;
let i =2;
let isprime = true;
if(num <=1){
    isprime = false;
}else{
    while(i<num){
        if(num % i===0){
        isprime= false;
        break;
        }
        i++;
    }
   
}
console.log(isprime ? "Prime number" : "Not Prime number");
