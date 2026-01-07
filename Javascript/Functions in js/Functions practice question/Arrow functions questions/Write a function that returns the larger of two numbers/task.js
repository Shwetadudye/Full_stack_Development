//Write a function that returns the larger of two numbers

const large = (a,b) => {
    if(a>b){
        return a + " is larger";
    }
    return b + " is larger";
}
console.log(large(24,67))