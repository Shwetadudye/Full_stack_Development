import { useState } from "react";


export const Todos = ({props}) =>{
  const [editText , setEditText] = useState('');
  const [pinItems , setPinItems] = useState([]);

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
        ...el , isCompleted : true,
      };
    });
    setTodo(selectAll);
   };

   const handleSelectDelete = (id)=>{
     const deleteselect = todo.filter((el)=> el.isCompleted !== trim );
     setTodo(deleteselect);
   };

   const changeInput = (id) =>{
    const changeValue = todo.map((el)=>
      el.id === id ? {...el, isCompleted:!el.isCompleted}:el,
    );
    setTodo(changeValue);
   };

   const handlePinItems =(id) =>{
    /*id
    old state [1,3,2] ..sorting

    new state [2]*/

    const pin_value = todo.filter((el)=> el.id ===id);
    setPinItems((prev) => [...prev, ...pin_value]);

    const unPin_value = todo.filter((el)=> el.id !==id);
    setTodo(unPin_value);
   };

   if(todo.length ===0 && pinItems.length===0) {
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
      
       <h1>Pin Items</h1>
       {pinItems.map((el,i)=>{
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
     
           <h3>{i+1}</h3>

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
           <button onClick={() => handlePinItems(el.id)}>Pin</button>
          </div> 
        );
       })} 

       <h3>Unpin Data</h3>
          {todo.map((el,i)=>{
            return(
              <div 
              key={el.id}
              style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 'auto'
              }}>
                <input type="checkbox" onChange={() =>{
                  changeInput(el.id);
                }}
                checked={el.isCompleted}
                 /> 
                 <h3>{i+1}</h3>

                 {el.isEdit ? (
                  <input name="edit_items" type="text" defaultValue={el.text} onChange={(el) => setEditText(editText.target.value)}
                    />        
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
           <button onClick={() => handlePinItems(el.id)}>Pin</button>
          </div> 
        );
       })}

    </>
   );
};