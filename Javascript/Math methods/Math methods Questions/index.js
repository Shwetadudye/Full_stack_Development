 //Q1. Round 5.6789 to 2 decimal places.

 let num1 = 5.6789;
 let round = num1.toFixed(2)

 console.log(round);

 // Q2.Find the ceiling value of 4.2.

 let num2 = 4.2;
 console.log(Math.ceil(4.2));

 // Q3. Find the floor value of 9.99.

 let num3 = 9.99;
 console.log(Math.floor(9.99));

// Q4.Generate a random number between 1 and 10.
 console.log(Math.floor(Math.random()*10)+1)

 // Q5. Find the maximum value among 25, 78, 13, 56.

 console.log(Math.max(25,78,13,56))

 // Q6. Find the minimum value among -12, -5, 0, 8, 3

 console.log(Math.min(-12,-5,0,8,3))

 // Q7. Calculate 2 raised to the power of 8

 console.log(Math.pow(2,8))
 
 // Q8. Find the square root of 121
 console.log(Math.sqrt(121));

 // Q9. Round -3.45 to the nearest integer
 console.log(Math.round(-3.45))

 // Q10. Get the absolute value of -150
 console.log(Math.abs(-150))

 // Q11.Find the cube root of 64.
 console.log(Math.cbrt(64))

 // Q12 Generate a random decimal number between 0 and 1.
  console.log(Math.random());

// Q13. Round 7.555 to the nearest whole number
 console.log(Math.round(7.555))

 // Q14. Value of π up to 4 decimal places
 console.log(Math.PI.toFixed(4))

 // Q15. log(100) base 10
 console.log(Math.log10(10));

 // Q16. ln(e^5)
 console.log(Math.log(Math.exp(5)));

 // Q17. sine of 90 degrees
console.log(Math.sin(90*Math.PI / 180))

// Q18. cosine of 0 degrees
console.log(Math.cos(0*Math.PI/180));

// Q19. tangent of 45 degrees 

console.log(Math.tan(45*Math.PI/180))

// Q20. Convert 30 degrees to radians
console.log(30 * Math.PI / 180);
