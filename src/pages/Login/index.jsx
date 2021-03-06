import React, { useState } from 'react'
import styled from "styled-components"
import {
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom"
import Button from "../../components/Button"
import AuthenticationService from "../../services/AuthenticationService"

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 142px);
  background-color: #264653;
  overflow: scroll;
`

const Box = styled.div`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  width: 350px;
  height: 320px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.3);
  justify-content: center;
  background-color: white;
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;
  
  label{
    width: 100%;
    text-align: left;
  }
  
  input {
    font-size: 18px;
    width: 100%;
    min-height: 40px;
  }

  :nth-of-type(2) {
    margin-top: 20px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 30px;
`

const roles = {
  '[ROLE_ADMIN]': 'admin',
  '[ROLE_TEACHER]': 'teacher',
  '[ROLE_STUDENT]': 'student',
}

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function toggleLoggedIn() {
    //TODO: Fix login logic
    setLoggedIn(!loggedIn)
  }


  async function handleLogin() {
    const data = await AuthenticationService.login(username, password);

    window.sessionStorage.setItem('token', data.token)
    setLoggedIn(true)
    props.setIsLoggedIn(true)
    props.setRole(roles[data.role])
    props.setId(data.id)
    history.replace(from);
  }
  return (
    loggedIn ?
      <Redirect to="/teachers" /> :

      <Container>
        <Box>
          <form>
            <Input>
              <label>Identifiant ou adresse e-mail</label>
              <input type="text" autoComplete="off" value={username} onChange={handleUsername} />
            </Input>
            <Input>
              <label>Mot de passe</label>
              <input type="password" autoComplete="off" value={password} onChange={handlePassword} />
            </Input>
            <ButtonWrapper>
              <Button onClick={handleLogin}>Log in</Button>
            </ButtonWrapper>
          </form>
        </Box>
      </Container>

  )
}

export default Login