import { 
    ChakraProvider,
    Input,
    Box,
    Center,Button
   } from '@chakra-ui/react'
   

export const Login = () => {
    return(
    <>
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='95px'>
                <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px'>
                    <Center>
                        <h1> Faça o Login</h1>
                    </Center>
                        <Input placeholder='Email' type='email' />
                        <Input placeholder='Password' type='password'/>
                        <br /><br />
                    <Center>
                        <Button colorScheme='teal' size='lg' marginTop='15px'>
                            Entrar
                        </Button>                    
                    </Center>
                </Box>
            </Box>    
        </ChakraProvider>
    </>
    )
}