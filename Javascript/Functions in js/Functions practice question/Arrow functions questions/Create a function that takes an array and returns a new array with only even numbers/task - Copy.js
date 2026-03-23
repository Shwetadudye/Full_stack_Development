//Create a function that takes an array and returns a new array with only even numbers

const getEvenNumbers = (arr) => {
    let result = [];
    let j = 0;

    for (let i =0 ; i<arr.length ;i++){
        if (arr [i]%2 ===0){
            result [j] = arr[i];
            j++;
        }
    }return result;
}
console.log(getEvenNumbers([1,2,3,4,5,6]))