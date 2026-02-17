import {CustomForm} from './CustomForm'

export const Form = () =>{
    const style = { display: 'flex' ,alignItems: 'start', flexDirection: 'column', gap:'10px',width:'30%',margin:'auto'}

    const dataForm = [
        {id:"email", type:"email", placeholder:"Enter your email", name:"email"},
        {id:"password", type:"password", placeholder:"Enter your password", name:"password"},
        {id:"phone", type:"tel", placeholder:"Enter your phone", name:"phone"},
        {id:"address", type:"textarea", placeholder:"Enter your address", name:"address"},
        {id:"name", type:"text", placeholder:"Enter your name", name:"name"},
    ]
     const showDataVal =(value)=>{
        console.log(value);
     }
    return(
        <CustomForm style={style} data={dataForm}
        button={"signin"} func={showDataVal} />
    )
}