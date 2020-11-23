import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from "../Button"

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 30px;
  min-height: 72px;
  align-items: center;
  box-shadow: 0px 0px 20px -10px #000000;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  max-width: ${props => props.isLoggedIn ? '350px' : '500px'};
  justify-content: space-between;
  align-items: center;
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
      <List isLoggedIn={props.isLoggedIn}>
        <StyledLink to="/"><li>Home</li></StyledLink>
        <StyledLink to="/teachers/list/all"><li>Teachers</li></StyledLink>
        {props.role === 'admin' ? <StyledLink to="/students"><li>Students</li></StyledLink> : null}
        {props.isLoggedIn ?
          <StyledLink to={`/${props.role}/${props.id}/profile`}><li>Profile</li></StyledLink> :
          <StyledLink to="/login"><li>Connexion</li></StyledLink>
        }

        {props.isLoggedIn ?
          null
          :
          <StyledLink to="/signup">
            <Button color="primary">Inscription</Button>
          </StyledLink>
        }
      </List>
    </Nav>
  )
}

export default Navigation