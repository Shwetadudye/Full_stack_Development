//Print all prime numbers between 1 and 100.  

for (let num = 2; num <= 100; num++) {      // Outer loop
    let isPrime = true;

    for (let i = 2; i < num; i++) {        
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
