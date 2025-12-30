/*10. A temperature is given. Print:

- `≤ 10°C` → Cold
- `11–25°C` → Pleasant
- `>= 25°C` → Hot
*/

let temp =26;

switch(true){
    case temp <=10:
        console.log("cold");
        break;
        case temp <=25:
            console.log("Pleasant");
            break;
            default:
                console.log("Hot");
                break;
}