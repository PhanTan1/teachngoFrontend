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
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerText = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

const Home = (props) => {
  return (
    <Wrapper>
      <h1>Welcome to teach and go</h1>

      <div>
        <div>Recherches rapides</div>
        <CategoriesWrapper>
          <Category><InnerText>Primaire</InnerText></Category>
          <Category><InnerText>Secondaire</InnerText></Category>
          <Category><InnerText>Universitaire</InnerText></Category>
          <Category><InnerText>Langues</InnerText></Category>
        </CategoriesWrapper>
      </div>
    </Wrapper>
  )
}

export default Home