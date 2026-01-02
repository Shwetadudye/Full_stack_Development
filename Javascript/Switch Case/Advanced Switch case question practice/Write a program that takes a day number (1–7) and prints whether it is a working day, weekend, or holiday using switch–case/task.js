/*Write a program that takes a **day number (1–7)** and prints whether it is a **working day, weekend, or holiday** using switch–case.*/

let day = 4 ;
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Working day");
        break;
    case 6:
        console.log("Weekend");
        break;
    case 7:
        console.log("Holiday");
        break;
    default:
        console.log("Invalid day number");
        break;
}