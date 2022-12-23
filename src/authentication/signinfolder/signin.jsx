import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Link,Button,Heading,Text,useColorModeValue,
  } from '@chakra-ui/react';
  


export const SignIn=(props)=>{


    return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
              </Text>
            </Stack>

            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>

              <Stack spacing={4}>
              <form>

            
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="signinEmail"  value={props.signinInput.signinEmail} 
                  onChange={props.handleSignInInputValue} autoComplete="off" placeholder='Enter Email Id'/>
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="signinPassword" value={props.signinInput.signinPassword} 
                  onChange={props.handleSignInInputValue} autoComplete="off" placeholder='Enter Password'/>
                </FormControl>
                <Stack spacing={10}>
  
                  <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={props.handleSignIn} 
                    >
                    Sign in
                  </Button>
                  
                </Stack>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
    
}

