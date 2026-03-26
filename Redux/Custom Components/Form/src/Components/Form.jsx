
import React from "react";
import { Button } from "./Button";

{/*
    name:""
    email:""
    pass:""
    phone:""
    addr:""
    */ }
export const Form =({data , button='submit'})=>{
    console.log ("data" ,data);
  const [ formData , setFormData] = React.useState(()=>{
    return data.reduce((acc,curr)=>{
       acc[curr.name]='';
       return acc;
    },{});
  });


  const handleChange =(e)=>{
    const {name , value} =e.target;

    console.log(name,value);

    setFormData({...formData,[name]:value}); // if dont take an [] than name becomes key
  }



  const handleSubmit =(e)=>{
    e.preventDefault();

    let flag = false;

    for (let key in formData){
        console.log(formData[key].length)
        if(formData[key].length>0){
            flag= true;
        }else{
            flag= false;
        }
    }
    if(flag){
        localStorage.setItem("formData",JSON.stringify(formData))
    }else{
        alert('please fill the form correct way')
    }
  }

    console.log(formData);

    return(
    <>
    <form onSubmit={handleSubmit}>
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
                        cols="50"
                        onChange={handleChange}></textarea>
                        
                    ):(
                       <input type={el.type} name={el.name} placeholder={el.placeholder} id={el.id} onChange={handleChange}/>
                    )}
                    
                </div>
                
            )
        })}

     <Button value={button} />
    </form>
    </>
    )
}