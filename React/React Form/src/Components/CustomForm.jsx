
/*{
email=""
phone=""
password=""
}*/

import PropTypes from "prop-types";
import { useState } from "react";


export const CustomForm = ({style,data, button,func})=>{
    console.log(data);
    const[formData, setFormData] = useState(()=>{
        return data.reduce((acc,curr)=>{
            acc[curr.name]=""
            return acc
        },{})
    })

    const handleChange =(e)=>{
        let{name,value} =e.target;

        setFormData(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const  handleSubmit =(e)=>{
        e.preventDefault();
        func(formData)
    }
    return(
        <form onSubmit={handleSubmit} style ={style}>
            {
                data.map((items,index)=>{
                    return(<div key={index}>
                        <label htmlFor={items.id}>{items.name}</label>
                        <input id={items.id} type={items.type} placeholder={items.placeholder} name={items.name}
                          onChange={e=>
                          handleChange(e)}
                        />
       
                    </div>)
                })
            }
            <button>Submit </button>
        </form>
    )
}

CustomForm.propTypes ={
    style: PropTypes.object.isRequired,
    button: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
        })
    ).isRequired
}