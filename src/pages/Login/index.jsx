import React, { useState } from 'react'
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import Button from "../../components/Button"

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Box = styled.div`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
  left: 50%;
  width: 280px;
  height: 290px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label{
    width: 100%;
    text-align: left;
  }

  input {
    width: 100%;
  }

  :nth-of-type(2) {
    margin-top: 20px;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 30px;
`

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

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


  return (
    loggedIn ?
      <Redirect to="/teachers" /> :

      <Container>
        <Box>
          <form>
            <h3>Login</h3>
            <Input>
              <label>Username</label>
              <input type="text" autoComplete="off" value={username} onChange={handleUsername} />
            </Input>
            <Input>
              <label>Password</label>
              <input type="password" autoComplete="off" value={password} onChange={handlePassword} />
            </Input>
            <ButtonWrapper>
              <Button onClick={toggleLoggedIn}>Log in</Button>
            </ButtonWrapper>
          </form>
        </Box>
      </Container>

  )
}

export default Login