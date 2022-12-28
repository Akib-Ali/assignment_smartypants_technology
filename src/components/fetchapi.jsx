import { useEffect, useState } from "react"
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Text, Box,Flex} from '@chakra-ui/react'
import { UserInterFace } from "./userinterface"

export const FetchApi=()=>{

    const [countryinfo, setcountryInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchinput,setsearchinput] = useState("")

   


    
   const fetchmethod= async(params)=>{
     const res = await fetch("https://restcountries.com/v2/all", params)
     const actualdata = await res.json();
     setLoading(false)
     setcountryInfo(actualdata)
    

   }

   useEffect(()=>{
    setLoading(true)
     fetchmethod()
     
   },[setsearchinput])

   console.log(countryinfo)


   const handleSearch=(e)=>{
    e.preventDefault()
    
     

       let params={
            q:`${searchinput}`
        }

        fetchmethod(params)
    
       setsearchinput("")




  }


  





    return(

        
         

    <>

      
         <Flex   gap="40px" width="700px" margin={"auto"} mt="20px" mb="70px">
            <form>
            Search Country: {}
            <input type ="text" placeholder="Searching Country" border="2px solid grey" value={searchinput} 
                onChange={((e)=> setsearchinput(e.target.value))}
            />
            <button style={{color:"white", backgroundColor:"teal" ,width:"100px"}} onClick={handleSearch}>Search</button>
            </form>
         </Flex>
      

      {loading && <h1 style={{textAlign: "center", color:"green", fontWeight:"600"}} >...loading please wait data is loading</h1>}
         <TableContainer>
        <Table variant='striped' colorScheme='teal'>
        
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

</>

            
    )
}