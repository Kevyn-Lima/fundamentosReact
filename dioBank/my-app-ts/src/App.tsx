import { Layout } from './components/Layout';
import { Login } from './components/login/Login';
import { ChakraProvider } from '@chakra-ui/react'



function App() {
  return (
   <ChakraProvider>
      <Layout >
          <Login/>        
      </Layout>
   </ChakraProvider>
  );
}

export default App;
