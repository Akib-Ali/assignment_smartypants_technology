import { useState } from "react"
import {SignIn} from "../signinfolder/signin"


export const SignInMain=()=>{


    const [signinInput,setsigninInput] = useState({
        signinEmail:"",
        signinPassword:""
    })

    const [signindata, setsignData] = useState([])


    let list = localStorage.getItem("logindetail")
    console.log(`here is received local storage  ${list}`)



    const handleSignInInputValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setsigninInput({...signinInput, [name] : value})
    }

  

    const handleSignIn=(e)=>{
        e.preventDefault()

        setsignData([signinInput,...signindata])

        
        if(list.emailaddress === signindata.signinEmail){
            alert("yes")
  
          }else{
              alert("no")
          }
       

        // let list = JSON.parse(localStorage.getItem("detail"))
    




    }

    console.log(signindata)






    return(

        <div>
    
           <SignIn signinInput={signinInput} 
           setsigninInput={setsigninInput} 
           handleSignInInputValue={handleSignInInputValue} signindata={signindata} setsignData={setsignData}  
           handleSignIn={handleSignIn}/>
          
        </div>
    )
}