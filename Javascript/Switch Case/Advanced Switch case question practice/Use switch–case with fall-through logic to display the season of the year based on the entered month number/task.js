/*Use **switch–case with fall-through logic** to display the **season of the year** based on the entered month number.*/

let num=12;

switch(num){
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Rainy");
        break;
    case 9:
    case 10:
    case 11:
        console,log("Autumn");
        break;
    default:
        console.log("Invalid season")
}