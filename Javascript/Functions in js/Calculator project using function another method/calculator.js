let num_1= 20;
let num_2=30;
let operator= '+';

function calculator(...arr){
    let n1= arr[0];
    let n2= arr[1];
    let operator = arr[2];

    switch(operator){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        case '%':
            return n1% n2;
        default:
            return "Invalid operator! please use (+ ,- ,* ,/ ,%)";

    }

}
let ans = calculator(num_1,num_2,operator);
console.log(ans);