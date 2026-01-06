//Write a function that converts the first letter of each word in a string to uppercase

function capitalize(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (i === 0 || text[i - 1] === " ") {
            result += text[i].toUpperCase();
        } else {
            result += text[i];
        }
    }

    return result;
}

console.log(capitalize("shweta dudye")); 
// Shweta Dudye
