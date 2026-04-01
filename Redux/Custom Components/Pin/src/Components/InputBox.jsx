import React from "react";
import PropTypes from "prop-types";
import { PinItems } from "./PinItems";

// task : backspace ->clear 
// copy paste


export const InputBox =({label, length , preBox})=>{
    const [PinValue,setPinValue]= React.useState(new Array(length).fill(''));

    const nodeRefData = React.useRef(new Array(length).fill(0));

   const handleChange = (value, index)=>{
    console.log(value);
    console.log(index);
        let newVal =[...PinValue];

        newVal[index]= value;

        setPinValue(newVal);
       console.log(PinValue.length-1);
       if(value && index <= PinValue.length-1){
        nodeRefData.current[index+1].focus();0
       }

    }

    console.log(PinValue);

    return(
        <>
        <h1 style={{textAlign:'center'}}>{label}</h1>
        <div style={{
            display:'flex',
            justifyContent:'space-evenly',
            width:'70%',
            margin:'auto',
        }}>

            {PinValue.map((_,i) =>{
                return(
                 <PinItems 
                 key ={i+1}
                  max={preBox} 
                handleChangeEvent = {(value)=> 
                handleChange(value,i)}
                ref={(node)=>
                    (nodeRefData.current[i]=node)}
                />
                );
            })}
        </div>
        </>
    )
};

InputBox.prototype={
    label: PropTypes.string.isRequired,
};

InputBox.defaultProps={
    length: 3,
    preBox:1,
}