//Check if a number is a palindrome using loops (e.g., `121 → Palindrome`) (if we reverse number than we get same number)

let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if (reverse === original) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}