import { useState } from "react"
import SignUp from "../signupfolder/signup"

export const SignUpMain=()=>{

    const [inputvalue, setInputValue] = useState({
     firstname:"",
     lastname:"",
     emailaddress:"",
     password:"",
     repeatpassword:""
    })
    const [data, setData] = useState([])



    const handleInputValue=(e)=>{

    const name= e.target.name;
    const value= e.target.value;
    setInputValue({...inputvalue, [name] : value})
   }


   const handleSubmit=(e)=>{
    e.preventDefault()
     setData([inputvalue, ...data])
    }


   console.log(data)

  return(

    <div>
       <SignUp inputvalue={inputvalue} setInputValue={setInputValue} handleInputValue={handleInputValue} 
       handleSubmit={handleSubmit}/> 
    </div>
    )
}