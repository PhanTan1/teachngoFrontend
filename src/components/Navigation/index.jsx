import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from "../Button"

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 30px;
  min-height: 50px;
  align-items: center;
  box-shadow: 0px 0px 20px -10px #000000
`

const List = styled.ul`
  list-style: none;
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0px;
  margin-right: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: all .2s ease-in-out;

  :hover {
    color: red;
    text-decoration: none;
  }
`

const Navigation = (props) => {
  return (
    <Nav>
      <List>
        <StyledLink to="/"><li>Home</li></StyledLink>
        <StyledLink to="/teachers"><li>Teachers</li></StyledLink>
        <StyledLink to="/students"><li>Students</li></StyledLink>
        <StyledLink to="/login"><li>Login</li></StyledLink>
      </List>
      <Button color="primary">Appelez nous</Button>
    </Nav>
  )
}

export default Navigation