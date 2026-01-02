/*Categorize a person by age:
   - `0–12` → Child
   - `13–19` → Teen
   - `20–59` → Adult
   - `60+` → Senior */

   let age = 88 ;

   if (age >= 0 && age <=12){
    console.log("child");
   }
   else if (age >=13 && age <=19){
    console.log("Teen");
   }
   else if(age >=20 && age<= 59){
    console.log("Adult");
   }
   else{
    console.log("Senior")
   }