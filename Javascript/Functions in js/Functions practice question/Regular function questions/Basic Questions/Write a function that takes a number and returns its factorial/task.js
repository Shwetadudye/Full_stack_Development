//Write a function that takes a number and returns its factorial

let number = 5;

function factorial(number){
    let factorial = 1;
      for(let i=1;i<=number;i++){
        factorial= factorial*i;
      }
      return factorial;
}
console.log(factorial(number));
