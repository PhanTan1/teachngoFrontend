import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}`;

const Loading = styled.div`
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color:  #264653;
  -webkit-animation: spin 2s linear infinite;
  animation: ${spin} 2s linear infinite;
  :before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color:  #2A9D8F;
    -webkit-animation: spin 3s linear infinite;
    animation: ${spin} 3s linear infinite;
  }
  :after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color:  #E9C46A;
    -webkit-animation: spin 1.5s linear infinite;
    animation: ${spin} 1.5s linear infinite;
  }
`;

const Loader = (props) => (
  <Loading />
);

export default Loader;