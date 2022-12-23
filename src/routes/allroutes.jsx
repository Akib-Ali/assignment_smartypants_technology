import React from "react";
import { Routes,Route } from "react-router-dom";
import { SignInMain } from "../authentication/signinfolder/signmain";
import { SignUpMain } from "../authentication/signupfolder/signupmain";
import { FetchApi } from "../components/fetchapi";



export const AllRoutes=()=>{


return(
   <>
    <Routes>
    <Route path ="/" element={<FetchApi/>}/>
        <Route path="/signup" element={<SignUpMain/>}/>
       <Route path="/signin" element={<SignInMain/>}/>
        
    </Routes>
   </>
)



}