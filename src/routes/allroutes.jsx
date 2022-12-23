import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SignIn } from "../authentication/signinfolder/signin";
import { SignUpMain } from "../authentication/signupfolder/signupmain";



export const AllRoutes=()=>{


return(
   <>
    <Routes>
        <Route path="/" element={<SignUpMain/>} />
        <Route path="/signin" element={<SignIn/>}/>
    </Routes>
   </>
)



}