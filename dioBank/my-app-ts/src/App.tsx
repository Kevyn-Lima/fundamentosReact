import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { Center, ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
   <ChakraProvider>
      <Layout>
        <Center> 
          <Login/>
        </Center>
      </Layout>
   </ChakraProvider>
  );
}

export default App;
