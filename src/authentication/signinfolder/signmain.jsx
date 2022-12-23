import { useState } from "react"
import {SignIn} from "../signinfolder/signin"


export const SignInMain=()=>{

    const [signinInput,setsigninInput] = useState({
        signinEmail:"",
        signinPassword:""
    })

    const [signindata, setsignData] = useState([])

    const handleSignInInputValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setsigninInput({...signinInput, [name] : value})
     }

    console.log(signindata)

    const handleSignIn=(e)=>{
        e.preventDefault()

        setsignData([signinInput,...signindata])


    }






    return(

        <div>
    
           <SignIn signinInput={signinInput} 
           setsigninInput={setsigninInput} 
           handleSignInInputValue={handleSignInInputValue} signindata={signindata} setsignData={setsignData}  
           handleSignIn={handleSignIn}/>
          
        </div>
    )
}