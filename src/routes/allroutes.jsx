import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { SignIn } from "../authentication/signinfolder/signin";
import { SignUp } from "../authentication/signupfolder/signup";
import Navbar from "../components/navbar";


export const AllRoutes=()=>{


return(
   <>
    <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>}/>
    </Routes>
   </>
)



}