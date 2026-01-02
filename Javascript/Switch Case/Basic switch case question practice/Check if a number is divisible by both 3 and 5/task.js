/*Check if a number is **divisible by both 3 and 5**.*/

let num= 15;

switch(true){
    case num%3===0 && num%5===0:
        console.log(num+ " is divisible by 3 and 5");
        break;
        case num%3===0:
            console.log(num+ " is divisible by 3");
            break;
            case num%5===0:
                console.log(num+ " is divisible by 5");
                break;
                default:
                    console.log(num+ " is not divisible by 3 and 5 ");
                    break;
}