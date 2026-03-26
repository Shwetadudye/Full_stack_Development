import React from "react";

export const PinItems =({max})=>{
    return(
        <input style={
            {
                width:'35px',
                height: '35px',
                border:'1.15rem solid grey',
                borderRadius:'0.2rem',
                textAlign: 'center' }
        }
        type="text"
        maxLength={max} />
    );
};