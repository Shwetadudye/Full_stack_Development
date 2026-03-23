//Write a function that takes a number and returns its factorial

const fact = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(fact(5)); // 120
