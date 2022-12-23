import { useState } from "react"
import {SignIn} from "../signinfolder/signin"
import { useNavigate } from "react-router-dom"


export const SignInMain=()=>{


    const [signinInput,setsigninInput] = useState({
        signinEmail:"",
        signinPassword:""
    })

    const navigate = useNavigate()
    



    const handleSignInInputValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setsigninInput({...signinInput, [name] : value})
    }

  

    const handleSignIn=(e)=>{
        e.preventDefault()

     const loggeduser = JSON.parse(localStorage.getItem("userinfo"))

     if(signinInput.signinEmail === loggeduser.emailaddress  && signinInput.signinPassword === loggeduser.password){
       alert(" congratulation successful login")
        navigate("/")
    
        
     }else{
        alert("Sorry password or email Id is wrong")
     }

    
  }

 return(

        <div>
    
           <SignIn signinInput={signinInput} 
           setsigninInput={setsigninInput} 
           handleSignInInputValue={handleSignInInputValue}    handleSignIn={handleSignIn}/>
          
        </div>
    )
}