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