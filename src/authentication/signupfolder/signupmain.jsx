import { useEffect, useState } from "react"
import SignUp from "../signupfolder/signup"
import { useNavigate } from "react-router-dom";



export const SignUpMain=()=>{

    const [inputvalue, setInputValue] = useState({
     firstname:"",
     lastname:"",
     emailaddress:"",
     password:"",
     repeatpassword:""
    })

    

    const navigate = useNavigate()
    



    const handleInputValue=(e)=>{

    const name= e.target.name;
    const value= e.target.value;
    setInputValue({...inputvalue, [name] : value})
   }


   const handleSubmit=(e)=>{
    e.preventDefault()
    
    localStorage.setItem("userinfo", JSON.stringify(inputvalue))
    alert("created account successfuly")
     navigate("/")
  

   }


   
    return(

    <div>
       <SignUp inputvalue={inputvalue} setInputValue={setInputValue} handleInputValue={handleInputValue} 
       handleSubmit={handleSubmit}/> 
    </div>
    )
}