/*find the **largest among three numbers**.*/

let num1 = 10;
let num2 = 12;
let num3 =14;

switch(true){
    case num1>num2 && num1>num3:
        console.log(num1+" is greater");
        break;
        case num2>num1 && num2>num3:
            console.log(num2+" is greater");
            break;
            case num3>num1 && num3>num2:
                console.log(num3+" is greater");
                break;
                default:
                    console.log("num1,num2.num3 are equal to easch other");
                    break;
}