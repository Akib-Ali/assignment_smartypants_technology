import React from "react";
import { Routes,Route } from "react-router-dom";
import { SignInMain } from "../authentication/signinfolder/signmain";
import { SignUpMain } from "../authentication/signupfolder/signupmain";



export const AllRoutes=()=>{


return(
   <>
    <Routes>
        <Route path="/" element={<SignUpMain/>} />
        <Route path="/signin" element={<SignInMain/>}/>
    </Routes>
   </>
)



}