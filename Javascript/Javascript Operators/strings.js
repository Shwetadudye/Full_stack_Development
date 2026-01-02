/* String operators */

/*  

+ => concatination 
+= => Append string

*/

let name8 = 'Shweta'; 

let sur_name = 'Dudye';

let full_name = name8 + ' ' + sur_name;

let married = false;

let answer = `${name8} ${sur_name} is not married ${married}`;

//console.log(' answer:', answer);

let name1 = 'Shweta';
let name2 = 'Dudye';

// let full_name = name1 + " " + name2;
// console.log(" full_name:", full_name);

name1 += ' ' + name2;
console.log(' name1:', name1);