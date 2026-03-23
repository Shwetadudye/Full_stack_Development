//Write a function that reverses a given string

const reverse = (str)=>{
    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return reverse;
}
console.log(reverse("shweta"))