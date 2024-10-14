import styled from 'styled-components';

const Box = styled.div`
  background-color: orange
`
export const Login = () => {
    return(
    <>
        <Box>
        <h1> Faça o Login</h1>
        </Box>
        <label htmlFor='emailInput'>
           E-mail
        </label>

        <input type='email' id='emailInput'/>

        <label htmlFor='passwordInput'><br />
            Senha
        </label>

        <input id='passwordInput' type='password'/>

        <br />
        <button>
            Entrar
        </button>
    </>
    )
}