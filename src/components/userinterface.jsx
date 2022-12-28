import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
export const UserInterFace=(props)=>{


    const {name,capital,currencies} = props.elem
    
   const currenciessym = currencies?.map((elem,index)=>{

      return (
         elem.name
         


      )
        
   })

   console.log(currenciessym)




 return(


    

     
        <Tr>
        <Td>{props.elem.name}</Td>
        <Td>{props.elem.capital}</Td>
         
         <Td isNumeric>{currenciessym}</Td>
         

     
      </Tr>
      
    
    


 )




}