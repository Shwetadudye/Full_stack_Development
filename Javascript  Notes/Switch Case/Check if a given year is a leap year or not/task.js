/* Check if a given **year is a leap year** or not.*/

let year= 2022;

switch(true){
    case year%400===0 :
        console.log(year+"is leap year");
        break;
        case year%100===0:
            console.log(year+"is not leap year");
            break;
            case year%4===0:
                console.log(year+"year is leap year");
                break;
                default:
                    console.log(year+ "is not leap year");
                    break;
}