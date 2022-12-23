import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react'
export const UserInterFace=(props)=>{




 return(


    

     
        <Tr>
        <Td>{props.elem.name}</Td>
        <Td>{props.elem.capital}</Td>
     <Td isNumeric>{props.elem.area}</Td>
      </Tr>
      
    
    


 )




}