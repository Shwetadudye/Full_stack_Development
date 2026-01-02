/*Write a program using **switch–case** where the user enters a **country name** and it displays the **currency used** in that country.*/

let country = "India";

switch(country){
    case "India":
        console.log("Indian currency: INR");
        break;
    case "USA":
        console.log("American currency:USD");
        break;
    case "Japan":
        console.log("Japan Currency : JPY");
        break;
    case "Uk":
        console.log("Uk currency GBP");
        break;
    case "Australia":
        console.log("Australia currency : AUD");
        break;
    default:
        console.log("Invalid currency");
        break;
}