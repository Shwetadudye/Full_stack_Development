//Find the largest digit in a given number.  

let num = 1296;
let max = num % 10;

while (num > 0) {
    let digit = num % 10;
    
    if (digit > max) {
        max = digit;
    }
    
    num = Math.floor(num / 10);
}

console.log(max); // 9
