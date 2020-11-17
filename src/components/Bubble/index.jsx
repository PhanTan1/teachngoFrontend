import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background-image: url(${props => props.bg ? props.bg : null});
  background-size: cover;
  background-position: center;
`

const Infowrapper = styled.div`
  width: 100%
`

export default function Bubble(props) {

  return (
    <Wrapper bg={props.bg}>
      <Infowrapper>

      </Infowrapper>
    </Wrapper>
  )
}