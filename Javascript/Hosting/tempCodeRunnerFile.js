// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed 

// // <--------------------------------------- Hoisting in variavles ---------------------------------->

// console.log(name);  // output: undefined (because it is globally defined)|

// //  var defined variavle globally and when we print its value before initialization it prints "undefined" but when we print its value after the initialisation then it prints the value .

// var name = "Tejas"
// var name = "shweta"  // in var overide the value and print shweta
// console.log(name); //var allows redeclaration and is function-scoped,


// //let does not allow redeclaration and is block-scoped.
// let name = "Tejas";
// let name = "shweta"; //Error
// console.log(name); //let does NOT allow redeclaration in the same scope
// //SyntaxError: Identifier 'name' has already been declared

// let name = "Tejas";
// name = "shweta";   // ✔ allowed (reassignment)
// console.log(name); //shweta


// //const = Reassignment is also NOT allowed
// const name = "Tejas";
// const name = "shweta"; // ❌ Error
// console.log(name);
// //SyntaxError: Identifier 'name' has already been declared

// const name = "Tejas";
// name = "shweta"; // ❌ Error
// //TypeError: Assignment to constant variable.

// const name = "Tejas";
// console.log(name);
