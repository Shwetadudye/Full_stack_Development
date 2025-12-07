//# 🔹 Advanced Switch–Case Practice Questions


let num1 = 10 ;
let num2 = 5 ;
let calcOperation = "MULTIPLICATION" ;
switch ( calcOperation ) {
    case "ADDITION" :
        console.log ( num1 + num2 );
        break;
    case "SUBTRACTION" :
        console.log ( num1 - num2 );
        break;
    case "MULTIPLICATION" : 
        console.log ( num1 * num2 );
        break;
    case "DIVISION" :
        console.log ( num1 / num2 );
        break;
    case "MODULUS" :
        console.log ( num1 % num2 );
        break;
    case "EXPONENTIATION" :
        console.log ( num1 ** num2 );
        break;
    default :
        console.log ( "Invalid calculation operation" );
        break;
} 

        