import React from 'react'
import styled from 'styled-components'

const EffectWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`

const Wrapper = styled.div`
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 250px;
  background-image: url(${props => props.bg ? props.bg : null});
  background-size: cover;
  background-position: center;
  padding: 10px 20px;
  transition: all .2s ease-in-out;
  
  :before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    transition: all .2s ease-in-out;
  }

  ${EffectWrapper}: hover &  {
    transform: scale(1.2);
    
    :before{
      background-color: rgba(0,0,0,.4);
    }
  }
`

const Text = styled.span`
  width: 100%;
  color: white;
  display: inline-block;
  text-align: left;
`

const Name = styled(Text)`
  width: 100%;
  color: white;
  font-size: 22px;
  font-weight: bold;
`

const Location = styled(Text)`
  font-size: 15px;
`

const Infowrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 100%
`

export default function Bubble(props) {

  return (
    <EffectWrapper>
      <Wrapper bg={props.bg}>
      </Wrapper>
      <Infowrapper>
        <Name>{props.name}</Name>
        <Location>{props.location}</Location>
      </Infowrapper>
    </EffectWrapper>
  )
}