import React from 'react'
import styled from 'styled-components'

export default function Confirmation(props) {
  return (
    <div>
      Confirmed
      <div>{props.match.params.token}</div>
      <div>{props.match.params.login}</div>
    </div>
  )
}