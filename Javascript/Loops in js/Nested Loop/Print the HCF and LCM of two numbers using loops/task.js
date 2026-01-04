//Print the HCF and LCM of two numbers using loops. 
let num1=23;
let num2=44;
let hcf= 1;

for(let i=1;i<=num1 &&i<=num2;i++){
    if(num1 %i===0&& num2 % i===0){
        hcf=i;
    }
}
let lcm =(num1*num2)/hcf;

console.log(hcf);
console.log(lcm);