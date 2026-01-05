//Create a function that takes a string and returns its length without using `.length`

function getlength(str){
    let count=0;
    for(let i of str){
        count++;
    }
    return count;
}
console.log("length of string :",getlength("Shweta"));