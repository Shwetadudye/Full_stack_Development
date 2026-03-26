import React from "react";
import PropTypes from "prop-types";
import { PinItems } from "./PinItems";


export const InputBox =({label, length , preBox})=>{
    const [PinValue,setPinValue]= React.useState(new Array(length).fill(''));

    return(
        <>
        <h1 style={{textAlign:'center'}}>{label}</h1>
        <div style={{
            display:'flex',
            justifyContent:'space-evenly',
            width:'70%',
            margin:'auto',
        }}>

            {PinValue.map((el,i) =>{
                return <PinItems key ={i+1} max={preBox} />;
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