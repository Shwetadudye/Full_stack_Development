                      /* A user selects a drink:
   - C → Coffee
   - T → Tea
   - J → Juice
   - W → Water */

    let drinks = 'p';

   switch (drinks){
    case 'C' :
        console.log("Coffee");
        break;
        case 'T':
            console.log("Tea");
            break;
            case 'J':
                console.log("Juice");
                break;
                case 'w':
                    console.log("Water");
                    break;
                    default:
                        console.log("Please enter the first letter of the drink (C/T/J/W):");
                        break;
   } 