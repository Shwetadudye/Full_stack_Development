//Print the reverse of a given number (e.g., `123 → 321`)

// 123/10 -->12.3
//12/10-->1.2

let num = 123;     // yaha ap koi bhi number rakh sakte ho
let reverse = 0;

while (num > 0) {
  let digit = num % 10;           // 3 removing last digit
  reverse = reverse * 10 + digit; // (0*10+3)
  num = Math.floor(num / 10);    
}

console.log("Reverse =", reverse);
