let data ;

const API = ``;

function myTodoAdd() {
    const todoText = document.querySelector('#todos').value ;
    console.log('todoText',todoText);

    console.log('data', data);
    
    if (todoText.trim()=== '') return;

    let newTodos = {
        id: +data.length + 1 ,
        text: todoText,
        isEdit: false ,
        isCompleted: false ,
    };

    fetch(API,{
        method: 'post',
        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify(newTodos),
    })
    .then ((res)=> console.log('this is from  addTodo',res))
    .then (() => alert ('Data has been sent'))
    .catch((err)=> console.log('this is from addTodo'),err)
    .finally(()=> console.log('done with api process'));

}

function fetchTodosDB() {
    fetch(API)
    .then((res)=> res.json())
    .then ((res)=> (data = [...res]))
    .catch ((err)=> console.log (err));
}