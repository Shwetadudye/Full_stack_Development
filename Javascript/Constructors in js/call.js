// // So here we have to use call, apply , blind 

//The call() method of Function instances calls this function with a given this value and arguments provided individually.
//  // call = In call we execute the code in this manner

let person2 = {
     name : 'Shweta'
};

let person3 = {
     name : 'Nancy'
 }

 function myfunction(age,city){
    this.age = age,
    this.city = city
 }

 myfunction.call(person2,23,'mumbai'); //so here we will give to arg in ','  to separate and send the value
 console.log(person2);


// call with Constructor
let person={
    name:"Shaad gavo boy"
}
class PersonDetails{
    constructor(age,city){
        this.age=age,
        this.city=city
    }
}
Object.assign(person ,new PersonDetails(90,'Pakistan'))
console.log(person)





 