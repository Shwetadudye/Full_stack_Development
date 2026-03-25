import { Button } from "./Components/Button"
import { Form } from "./Components/Form"

export const App =()=>{
   const formData =[
    {
      type: 'text',
      name: 'userName',
      placeholder: 'Enter your name ',
      id: 'username',
    },
   {
      type: 'email',
      name: 'userEmail',
      placeholder: 'Enter your Email ',
      id: 'useremail',
    },
        {
      type: 'password',
      name: 'userPassword',
      placeholder: 'Enter your Password ',
      id: 'userpassword',
    },
        {
      type: 'textArea',
      name: 'userAddress',
      placeholder: 'Enter your Address ',
      id: 'useraddress',
    },
        {
      type: 'tel',
      name: 'userPhone',
      placeholder: 'Enter your Phone ',
      id: 'userphone',
    }

   ]
  return (
  <>
   <Form data= {formData}/>
   {/*<Button style ={{padding: '0.5rem 2rem ', background:'red' }} value={'login'}/>
      <Button style ={{padding: '0.5rem 2rem ', background:'red' }} value={'signin'}
   */ }
  </>
)
}