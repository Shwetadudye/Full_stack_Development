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

let mybind = myFunction3.bind(person7,42,'pune')
mybind()
console.log(person7);

// bind with class

let persons = {
    name: "shweta"
};

class PersonDetails {
    setDetails(age, city) {
        this.age = age;
        this.city = city;
    }
}

let obj = new PersonDetails();
let myBind = obj.setDetails.bind(persons, 24, 'pune');
myBind();

console.log(persons);
