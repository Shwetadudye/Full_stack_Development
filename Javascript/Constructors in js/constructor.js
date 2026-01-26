// this = it is reference to the object where THIS is used .
// person1.name = this.name 
//this keyword doesnt work with arrow function
const person45 = {
    name: "Tejas",
    favFood: "Pizza",
    sayHello: function () {
        console.log(`hii i am ${this.name}`);
    },

     eat: function () {
        console.log(`${this.name} is eating${this.favFood}`)
    
    }
};

person45.sayHello();
person45.eat()


//A constructor is a special function used to create objects and initialize properties.
 //! Basically what 'new' keyword /operator does create instance of a user defined object type of one of the built-in object type that has a constructor function .
// 🔹 Role of the new Keyword
// When we use the new keyword, JavaScript:
// Creates a new empty object {}
// Binds this to that new object
// Assigns properties to the object
// Automatically returns the object

//eg : constructor function

 function Car (maker,model,year){
    this.make = maker,
     this.model = model,
    this.year = year
 }
 const car1 = new Car("Toyota", "Corolla", 1988);
 const car2 = new Car("Suzuki", "Swift", 1999);

 console.log(car1);
 console.log(car2);

 // below this code is called class constructor 
// class Car {
//     constructor(maker,model,year){
//         this.maker = maker,
//         this.model = model,
//         this.year  = year 
//     }
// }

// const car1 = new Car('toyota','toyota','1988');
// const car2 = new Car('Suzuki','Suzuki','1999');

// console.log(car1);
// console.log(car2);
