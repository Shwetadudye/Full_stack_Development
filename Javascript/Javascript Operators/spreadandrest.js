// rest and spread operator 

// spread operator 
//let arr = [1, 2, 3, 4];

//let newArr = [...arr, 5, 6, 7, 8];
// console.log(' newArr:', newArr);

// let finalArr = [...arr, ...newArr];
//console.log(" finalArr:", finalArr);

 // rest operator 

 const data= {
    name :'shweta',
    age : '23',
    maried :'false',
 }
const {name , ...rest} = data ;
 console.log(rest);

