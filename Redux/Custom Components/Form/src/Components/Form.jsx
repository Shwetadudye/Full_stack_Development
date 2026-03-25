
import React from "react";

{/*
    name:""
    email:""
    pass:""
    phone:""
    addr:""
    */ }
export const Form =({data})=>{
    console.log ("data" ,data);
  const [ formData , setFormData] = React.useState(()=>{
    return data.reduce((acc,curr)=>{
       acc[curr]='';
       return acc;
    },{});
  })
    return(
    <>
    <form>
        {data.map((el,i)=>{
            return(
                <div key={i+1}>
                    <label  htmlFor={el.id}>{el.name}</label>
                    {el.type==='textArea' ?(
                        <textarea 
                        name={el.name}
                        placeholder={el.placeholder}
                        id={el.id}
                        rows="10"
                        cols="50"></textarea>
                    ):(
                       <input type={el.type} name={el.name} placeholder={el.placeholder} id={el.id}/>
                    )}
                    
                </div>
            )
        })}

        
    </form>
    </>
    )
}