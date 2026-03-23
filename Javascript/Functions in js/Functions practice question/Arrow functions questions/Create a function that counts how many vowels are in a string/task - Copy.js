//Create a function that counts how many vowels are in a string

const vowels = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(vowels("shweta"))