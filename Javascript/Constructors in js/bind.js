// Bind with function
let person6={
    name:'suresh',
}
let person7={
    name:'ramesh',
}
function myFunction3(age,city){
    this.age=age;
    this.city=city;
}

let mybind = myFunction.bind(person7,42,'pune')
mybind()



// bind with class
let persons={
    name:"Shaad gavo boy"
}
class PersonDetails{
    constructor(age,city){
        this.age=age,
        this.city=city
    }
}
let obj = new PersonDetails
let myBind=obj.setDetails.bind(persons,24,'pune')
console.log(mybind())