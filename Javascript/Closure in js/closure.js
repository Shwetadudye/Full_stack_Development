//When a function creates a nested function, the nested function forms a closure.
//Even after the parent function has finished execution, the inner function can still access the parent’s variables.
const parentFunc = () => {
  let name = "Shweta";

  let childFunc = () => {
    let name = 'Dudye';

    let subChildFunc = () => {
      return name;
    };

    return subChildFunc;
  };

  return childFunc;
};

console.log(parentFunc()()());