import { useEffect, useState } from "react"
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
import { UserInterFace } from "./userinterface"

export const FetchApi=()=>{

    const [countryinfo, setcountryInfo] = useState([])

    
   const fetchmethod= async()=>{
     const res = await fetch("https://restcountries.com/v2/all")
     const actualdata = await res.json();
     setcountryInfo(actualdata )

   }

   useEffect(()=>{
     fetchmethod()
   },[])

   console.log(countryinfo)



    return(

        
         



         <TableContainer>
        <Table variant='striped' colorScheme='teal'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
        <Tr>
         <Th>Country Name</Th>
        <Th>Capital</Th>
        <Th isNumeric>Currency</Th>
        </Tr>
       </Thead>
       <Tbody>

       {countryinfo.map((elem,index)=>{

         return(

       <UserInterFace elem={elem} index={index}/>
       )

    
       })}
       </Tbody>

   
  </Table>
</TableContainer>

            
    )
}