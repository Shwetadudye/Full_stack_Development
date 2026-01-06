// object => document => object-literal
// {key:value} pair

let object = {
    name: 'Shweta dudye',
    age: 21,
    maried:false,
    hobbies:['pub-G', 'coc', 'cs'],
    school: {
        Graduation:'viva',
        XII: 'NGKG',
        X: 'NGKG',
    },
};

//console.log(object.name);
// console.log(object.age);
// console.log(object.maried);
//console.log(object.school);

//console.log(object.hobbies[2]);
//console.log(object.school.XII);0
console.log(typeof object);

for(let key in object){
    console.log(object[key]);
}

let arr = ['pubg','coc','bgmi']
console.log(typeof arr);

for (let index of arr){
    console.log(index);
}

function printKeys(data) {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      console.log(i); // array index as key
    }
  } 
  else if (typeof data === "object" && data !== null) {
    for (let key in data) {
      console.log(key);
      printKeys(data[key]); 
    }
  }
}

printKeys(object);
