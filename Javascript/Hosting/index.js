// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed 

// <--------------------------------------- Hoisting in variavles ---------------------------------->

console.log(name);  // output: undefined (because it is globally defined)|

//  var defined variavle globally and when we print its value before initialization it prints "undefined" but when we print its value after the initialisation then it prints the value .

var name = "Tejas"
var name = "shweta"  // in var overide the value and print shweta
console.log(name); //var allows redeclaration and is function-scoped,


//let does not allow redeclaration and is block-scoped.
let name = "Tejas";
let name = "shweta"; //Error
console.log(name); //let does NOT allow redeclaration in the same scope
//SyntaxError: Identifier 'name' has already been declared

let name = "Tejas";
name = "shweta";   // ✔ allowed (reassignment)
console.log(name); //shweta


//const = Reassignment is also NOT allowed
const name = "Tejas";
const name = "shweta"; // ❌ Error
console.log(name);
//SyntaxError: Identifier 'name' has already been declared

const name = "Tejas";
name = "shweta"; // ❌ Error
//TypeError: Assignment to constant variable.

const name = "Tejas";
console.log(name);


for(var i = 0; i<5; i++){
    console.log(i);  // output: 0,1,2,3,4
}
console.log(i); // output: 5 (because var is globaly defined so number 5 is initialize)

for(let i = 0; i<5; i++){
    console.log(i); // output: 0,1,2,3,4
}
console.log(i); // output: i is not defined(because let is not globaly defined so we can only print its value inside the loop.)

// <----------------------------------------- Hosting in function ---------------------------------->


function consoleData(){
    console.log("hello");
}
consoleData() // output: hello

function data(){
    let ans = name1();
    console.log(ans);
}

function name1(){
    return "hello"
}
data();