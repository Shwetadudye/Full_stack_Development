import { useState } from "react";


export const Todos = ({props}) =>{
  const {todo, setTodo} = props;

  
  const handleDelete = (id) =>{
    const deleteItems = todo.filter((el)=>el.id !== id);
    setTodo(deleteItems);
  };

  const handleEdits = (id)=>{
    const editItems = todo.map((el)=>
    el.id === id?{...el, isEdit:true}:el,
  );
  setTodo(editItems);
  };

  const handleCancel = (id) =>{
    const editItems = todo.map((el)=>
      el.id === id ? { ...el, isEdit:false}:el,
    );
    setTodo(editItems);
  };

  // handle select all 
   const handleSelect = () =>{
    const selectAll = todo.map((el)=>{
      return{
        ...el , isCompleted : !el.isCompleted,
      };
    });
    setTodo(selectAll);
   };

   const handleSelectDelete = (id)=>{
     const deleteselect = todo.filter((el)=> !el.isCompleted);
   setTodo(deleteselect);};

   const changeInput = (id) =>{
    const changeValue = todo.map((el)=>
      el.id === id ? {...el, isCompleted:!el.isCompleted}:el,
    );
    setTodo(changeValue)
   };

   if(todo.length ===0) {
    return <h1>Please enter your data</h1>
   }


   return(
    <>
       <h1> Todo list </h1>
       <div style={{display:'flex', gap:'1rem',justifyContent:'end'}}>
        <button onClick={handleSelect}>
          {todo[0].isCompleted ===false ? 'selectAll' : 'De-select all'}
        </button>
        <button onClick={handleSelectDelete}>Delete All</button>
       </div>

       {todo.map((el)=>{
        return(
          <div
          key={el.id}
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems : 'center',
            margin: 'auto',
          }}>
      
            <input type="checkbox" onChange={()=>{changeInput(el.id);}} checked ={el.isCompleted} />

            {el.isEdit ? (
              <input name="edit_items" type="text" defaultValue={el.text} onChange={(el)=> setEditText(el.target.value)}/>
            ):(
              <h1>{el.text}</h1>
            )}

           {el.isEdit ? (
            <>
            <button onClick={()=> handleCancel(el.id)} style={{height: 'fit-content'}}>Cancel</button>
            <button onClick={()=> handleConfirm(el.id)} style={{height: 'fit-content'}}>Confirm</button>
            </>
           ) :(
            <>
            <button onClick={()=> handleEdits(el.id)} style={{height: 'fit-content'}}>Edit</button>
            <button onClick={()=> handleDelete(el.id)} style={{height: 'fit-content'}}>Delete</button>
            </>
           )}
          </div>
        );
       })}
    </>
   );
};