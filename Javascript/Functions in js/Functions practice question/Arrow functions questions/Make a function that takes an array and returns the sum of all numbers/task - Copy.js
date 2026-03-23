//Make a function that takes an array and returns the sum of all numbers

const sum = (arr) => {
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1,2]))