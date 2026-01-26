// Polymorphysm

// Poly -> means multiple
        //    We have one method available in multiple class that is called poly.
        // Polymorphism is basically you have a method/property in multiple object.


class Vechicle{
    run(){
        console.log(`Vehichle is running`);
    }
}

class Truck{
    run(){
        console.log(`Truck is running`);
    }
}

class Car{
    run(){
        console.log(`Car is running`);
    }
}

const v1 = new Vechicle();
const v2 = new Truck();
const v3 = new Car();

v3.run();