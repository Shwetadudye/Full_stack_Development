//Check if a number is **even or odd**.

/*let num = 12 ;

if (num % 2 ==0){
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
    */

// Check if a number is **positive, negative, or zero**.

 /*let num = 1 ;

 if (num <0 ){
    console.log (num +"is negative");
 }
 else if(num >0) {
    console.log (num +" is positive");
 }
 else{
    console.log ("zero");
 }*/

   /* // Find the **greater** between two numbers.

    let a = 45;
    let b = 15;

    if(a>b){
        console.log("a is greater then b");
    }
    else {
        console.log("b is greater than a")
    }
  */


    //Find the **largest among three numbers**.
  /*  let num1=105;
    let num2 = 54;
    let num3 =98 ;

    if(num1>num2 &&num1>num2){
        console.log(num1 + "is largest");
    }
    else if (num2> num1 && num2> num3){
        console.log(num2 +"is largest");
    }
    else {
        console.log(num3 +"is largest")
    }*/

        // Check if a given **year is a leap year** or not.

        /* let year = 2025 ;

         if (year % 400 ===0) {
            console.log(year,"is leap year");
         }
         else if ( year %100 ===0){
            console.log(year,"is not leap year");
         }
         else if (year % 4 ===0){
            console.log (year,"is leap year");
         }
         else {
            console.log(year,"not a leap year")
         }
            
*/

  /* A student’s score is given. Print the **grade** based on:
   - `90–100` → A
   - `80–89` → B
   - `70–79` → C
   - `60–69` → D
   - `below 60` → F */
      
   /*let grade = 67;

   if(grade >= 90 && grade <=100 ){
     console.log (" A");
   } 
   else if (grade >= 80 && grade <=89){
    console.log ("B");
   }
   else if (grade>=70 && grade <=79){
    console.log ("c");
   }
   else if (grade>=60 && grade  <=69){
     console.log ("D")
   }
   else {
    console.log ("F")
   } */

    /*7. Categorize a person by age:
   - `0–12` → Child
   - `13–19` → Teen
   - `20–59` → Adult
   - `60+` → Senior*/

  /* let age = 88 ;

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
   */

   // Check if a given character is a **vowel or consonant**.

   /*let char = 'A' ;

   char = char.toLowerCase(); 

   if (char=== 'a' || char ==='e' || char ==='i'|| char ==='o'||char ==='u'){
    console.log (char+" is vowel");
   }
   else {
    console.log (char + "is consonant");
   } */

    // Check if a number is **divisible by both 3 and 5**.

  /*  let num = 45 ;
    

    if(num % 3===0 && num %5 ===0){
        console.log(num + " is divisible by both 3 and 5");
    }
    else if(num % 3 ===0){
        console.log(num + " is divisible by 3");     
    }
    else if (num %5 ===0){
        console.log(num +"is divisible by 5");
    }
    else{
        console.log("num is not divisible by 3 and 5")
    } */


        /*A temperature is given. Print:

- `≤ 10°C` → Cold
- `11–25°C` → Pleasant
- `>= 25°C` → Hot

---*/

let temp = 18;

if (temp <= 10){
    console.log("Cold");
}
else if (temp >= 11 && temp<= 25 ){
    console.log("Pleasant");
}
else{
    console.log("Hot");
}