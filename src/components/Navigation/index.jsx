import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 30px;
  border-bottom: 1px solid black;
  min-height: 50px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  max-width: 300px;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0px;
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
        <StyledLink to="/login"><li>Login</li></StyledLink>
      </List>
    </Nav>
  )
}

export default Navigation