/*A student’s score is given. Print the **grade** based on:
   - `90–100` → A
   - `80–89` → B
   - `70–79` → C
   - `60–69` → D
   - `below 60` → F */
      
   let grade = 67;

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
   }