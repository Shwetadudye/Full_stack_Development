/*. A student’s score is given. Print the **grade** based on:
   - `90–100` → A+
   - `80–89` → B
   - `70–79` → C
   - `60–69` → D
   - `below 60` → F*/

   let grade= 20;

switch(true){
    case grade >=90 && grade <=100:
        console.log("A");
        break;
        case grade >=80 && grade <=89:
            console.log("B");
            break;
            case grade>=70 && grade <=79:
                console.log("C");
                break;
                case grade >=60 && grade<= 69:
                console.log("D");
                break;
                default:
                    console.log("F");
                    break;

}