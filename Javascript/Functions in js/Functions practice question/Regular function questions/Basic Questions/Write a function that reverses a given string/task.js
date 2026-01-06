//Write a function that reverses a given string

function reverse(str){
     let reverse= " ";

     for (let i=str.length-1; i>=0;i--){ // array index start with 0 
        reverse += str[i];
     }return reverse;
}

console.log(reverse("Shweta Dudye"));