/* Categorize a person by age:
   - `0–12` → Child
   - `13–19` → Teen
   - `20–59` → Adult
   - `60+` → Senior*/


let age = 60;
   switch(true){
    case age>=0 && age <=12 :
        console.log("Child");
        break;
        case age >=13 && age <=19:
            console.log("Teen");
            break;
            case age >=20 && age<=59:
                console.log("Adult");
                break;
                default:
                    console.log("Senior");
                    break;
   }