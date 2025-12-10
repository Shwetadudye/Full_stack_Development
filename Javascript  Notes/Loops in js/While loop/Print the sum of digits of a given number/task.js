//Print the sum of digits of a given number (e.g., `432 → 9`)


let num = 432;
let sum = 0;

while(num>0){

    let digit= num% 10;
    sum= sum + digit;
    num = Math.floor(num/10);
}
console.log(sum);