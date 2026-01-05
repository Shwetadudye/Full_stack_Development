  // function name -> cal -> switch
        // user -> number1, number2 ,operator(+, -, * , /, %)


    function calculator(num1 ,num2 , operator){
        let result;

        switch(operator){
            case '+':
            result = num1 + num2;
            break;
            case '-':
                result = num1-num2;
                break;
            case '*':
                result = num1* num2;
                break;
            case '/':
                result = num1/num2;
                break;
            case '%':
                result = num1%num2;
                break;
            default:
                return "Invalid operator ! please enter +,-,*,/or %,"    
        }
        return `Result: ${result}`;
    }
    console.log(calculator(4,5,'+'))