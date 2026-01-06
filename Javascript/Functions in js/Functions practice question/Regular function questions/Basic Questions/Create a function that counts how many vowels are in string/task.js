//Create a function that counts how many vowels are in a string

function vowel(str){
    const vowels ="aeiouAEIOU";
    let count =0;

    for(const char of str){
        if(vowels.includes(char)){
            count++;
        }
    } return count;
}

console.log(vowel("Shweta"))
