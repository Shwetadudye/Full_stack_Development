// Inheritance -> It allwos to borrow the property of the object[parent].

class Car {
    constructor(n,m){
        (this.n = n), (this.m = m);
    }

    showDetails(){
        console.log(`this is brand name ${this.n} and year ${this.m}`);
    }
}

class SUV extends Car{
    constructor(x,y){
        super(x,y);
        this.buyer = "shweta";
    }
}

class miniSUV extends SUV{
    constructor(x,y){
        super(x,y);
        this.type = "mini-suv"
    }
}

const car1 = new miniSUV("ferrari", 2025);

console.log(car1);