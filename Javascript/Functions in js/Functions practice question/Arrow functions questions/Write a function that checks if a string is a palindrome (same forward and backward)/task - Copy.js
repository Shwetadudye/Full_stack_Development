//Write a function that checks if a string is a palindrome (same forward and backward)

const palindrome = (str) => {
    let reverse = "";

    for(let i = str.length-1;i>=0;i--){
        reverse+= str[i];
    }
    return str === reverse;
}
console.log(palindrome("madam"))