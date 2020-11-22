import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoadingIndicator from '../../components/LoadingIndicator'
import AuthenticationService from "../../services/AuthenticationService"
import { Redirect } from "react-router-dom"


const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: calc(100vh - 142px);
  overflow: scroll;
  padding: 20px;
`



export default function Confirmation(props) {
  const [registered, setRegistered] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const { token, login } = props.match.params

  useEffect(() => {
    AuthenticationService.activateAccount(token, login)
      .then(() => {
        setRegistered(true)
        setTimeout(() => {
          setRedirect(true)
        }, 3000)
      })
  }, [])

  return (
    <Container>
      {registered ?
        redirect ?
          <Redirect to="/login" />
          :
          <div>
            Votre compte a ete active, vous allez etre rediriger vers la page de connexion.
        </div>
        :
        <LoadingIndicator />

      }
    </Container>
  )
}