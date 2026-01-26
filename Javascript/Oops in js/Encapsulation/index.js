// Encapsulation -> create private variable.

class Car1 {
    #count;
    #name;
    constructor (n,m){
        (this.n = n), (this,m = m);
        this.#count = 100;
        this.#name = "shweta";
    }

    getCount(){
        return {count: this.#count,name: this.#name};
    }
}
const car2 = new Car1("maruti", 1995);
console.log(car2.getCount().count);
console.log(car2.getCount().name);
console.log(car2);