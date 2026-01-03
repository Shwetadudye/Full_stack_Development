//Find the smallest digit in a given number.  

let num= 23456;
let min = num% 10;

while(num>0){
    let digit = num % 10;

    if(digit<min){
        min= digit;
    }
    num =Math.floor(num/10);
}
console.log(min);