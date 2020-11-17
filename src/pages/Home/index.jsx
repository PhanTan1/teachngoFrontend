import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
`

const CategoriesWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
`

const Category = styled.div`
  max-width: 20%;
  height: 130px;
  width: 100%;
  background-color: black
`

const Home = (props) => {
  return (
    <Wrapper>
      <h1>Welcome to teach and go</h1>
      {/* <p>
        This page is under construction.
        Please visit us again soo and find the teacher thats suits your requirements the best
    </p> */}
      <CategoriesWrapper>
        <Category />
        <Category />
        <Category />
        <Category />
      </CategoriesWrapper>
    </Wrapper>
  )
}

export default Home