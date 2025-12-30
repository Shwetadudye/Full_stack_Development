 /*A temperature is given. Print:

- `≤ 10°C` → Cold
- `11–25°C` → Pleasant
- `>= 25°C` → Hot */

let temperature=10;

if(temperature<=10){
    console.log("cold");
}else if(temperature<=25){
    console.log("Pleasant");
}else{
    console.log("Hot");
}