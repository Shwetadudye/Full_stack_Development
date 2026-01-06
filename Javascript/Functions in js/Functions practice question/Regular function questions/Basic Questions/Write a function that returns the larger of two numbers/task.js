//Write a function that returns the larger of two numbers
let number1= 3;
let number2 = 6;

function larger(number1,number2){
    if(number1 > number2){
        return number1;
    }else{
        return number2;
    }
}
console.log(larger(number1,number2));