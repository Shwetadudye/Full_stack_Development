
// factorial 
// let num = 10;
// let fact = 1;

// for(i=1;i<=num;i++){
//     fact= fact*i;
// }
// console.log(fact);



// Find the maximum number of an array 

let array = [10, 20, 30, 40, 60];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Maximum number: ", max);

////find a number in an array 2
class Solution {
    public int search(int arr[], int x) {
        
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == x){
                return i;   // element found
            }
        }
        
        return -1;   // element not found
    }
}