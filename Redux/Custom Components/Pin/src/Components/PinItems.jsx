import React from "react";

export const PinItems = React.forwardRef(
    ({max, handleChangeEvent},ref)=>
    {
     const handlePinItems=(e)=>{
        console.log(e);
        switch(e.keyCode){
            //backspace
            case 8:
                break;
            // Tab key
            case 9:
                e.preventDefault();
                break;
            
            default:
                handleChangeEvent(e.target.value);
                break;
        }
     };
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
        maxLength={max}
        onKeyUp={handlePinItems}
        ref={ref}
        />
    );
  }
);