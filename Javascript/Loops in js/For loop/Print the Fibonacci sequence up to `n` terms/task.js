//Print the Fibonacci sequence up to `n` terms. (0,1,1,2,3,,5,8.13,21)

let n1=0;
let n2=1;
let n =10;

console.log(n1);
console.log(n2);


for(let i=3 ;i<=10;i++){
   let n3 = n1 + n2 ;
   console.log(n3);
    n1= n2
    n2= n3

}