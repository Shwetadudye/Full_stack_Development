//Create a function that takes a string and returns its length without using `.length`



const getlength = (str) => {
  let count = 0;
  for (let i of str) {
    count++;
  }
  return count;
};

console.log(getlength("shweta"));