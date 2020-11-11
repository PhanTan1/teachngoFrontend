import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
    border: 2px solid #2A9D8F;
    padding: ${props => props.size === 'xs' ? '5px 0px' : '10px 40px'};
    ${props => props.size === 'xs' ? 'font-size: 12px' : null};
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    text-align: center;
    color: #2A9D8F;
    cursor: pointer;

    &:hover {
        background-color: #2A9D8F;
        color: white;
    }
`

const Button = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default Button;