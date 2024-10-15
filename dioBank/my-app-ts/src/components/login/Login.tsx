import styled from 'styled-components';
import { 
    ChakraProvider,
    Input, Center
   } from '@chakra-ui/react'
   

export const Login = () => {
    return(
    <>
        <ChakraProvider>
            <Center h='100'> 
                <h1> Faça o Login</h1>
                <Input placeholder='Email' type='email'/>
                <Input placeholder='Password' type='password'/>
                <br /><br />
                <button>
                    Entrar
                </button>
            </Center>
        </ChakraProvider>
    </>
    )
}