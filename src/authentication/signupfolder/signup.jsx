import { Flex, Box, FormControl, FormLabel, Input, InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,
    useColorModeValue} from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  



const SignUp=(props)=>{
   const [showPassword, setShowPassword] = useState(false);
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}> Sign up</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>to enjoy all of our cool features ✌️</Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>

            <Stack spacing={4}>
           <form>

              <HStack>
              <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" autoComplete='off' placeholder='First Name' name="firstname"  value={props.inputvalue.firstname} onChange={props.handleInputValue}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" autoComplete='off' placeholder='Last Name' name="lastname" value={props.inputvalue.lastname} onChange={props.handleInputValue}/>
                  </FormControl>
                </Box> 
              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" autoComplete='off' placeholder='example@gmail.com'  name="emailaddress" value={props.inputvalue.emailaddress} onChange={props.handleInputValue}/>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  placeholder="Enter Password"  name="password" value={props.inputvalue.password} onChange={props.handleInputValue}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Repeat Password</FormLabel>
                <InputGroup>
                  <Input type="password" placeholder='Enter Same password' name="repeatpassword" value={props.inputvalue.repeatpassword} onChange={props.handleInputValue}/>
                
                </InputGroup>
              </FormControl>


              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{bg: 'blue.500', }}
                  onClick={props.handleSubmit}
                  
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Link to="/signin">
                <Text align={'center'}>
                  
                  Alredy a user ? <span style={{color:"green"}}>login</span>
                </Text>
                </Link>
                

              </Stack> 
              </form>
            </Stack>


                </Box>
        </Stack>
      </Flex>
    );
  
}

export default SignUp