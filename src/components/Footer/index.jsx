import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 70px;
  border-top: 1px solid black;
`

const Footer = (props) => {
  return (
    <Wrapper>
      <div>Footer</div>
    </Wrapper>
  )
}

export default Footer;