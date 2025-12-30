/*Check if a given character is a **vowel or consonant**.*/

let char = 'U';
   char= char.toLowerCase();
switch(true){
    case char=== 'a' || char=== 'e'|| char==='i'||char==='o'||char==='u':
        console.log("vowels");
        break;
        default:
            console.log("consonants");
            break; 
}