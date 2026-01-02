/* Write a program using **nested switch–case** to display details of a vehicle when a user enters:

   - Type: 2-wheeler / 4-wheeler
   - Model: Scooter, Bike, Car, SUV, etc.*/



   let type = "2-wheeler";
   let model = "scooter" ;

switch(type){
   case "2-wheeler":
      console.log("Type: 2-Wheeler");

      switch(model){
         case "scooter":
            console.log("model:scooter");
            console.log("suitable for city rides");
            break;
         case "bike":
            console.log("model:bike");
            console.log("Suitable for long rides");
            break;
         default :
             console.log("Invalid 2- wheeler");
             break;
      }
      break;
   case "4-wheeler":
      console.log("4-wheeler");

      switch(model){
         case "car":
            console.log(" model:car");
            console.log("comfortable for families");
            break;
         case "suv":
            console.log("model:suv");
            console.log("good for of roads and long riding");
            break;
         default :
         console.log("Invalid 4-wheeler ")
         break;
      }break;
      default:
         console.log("Invalid vehicle type");
         break;
}

