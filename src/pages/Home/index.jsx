import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StyledButton from '../../components/Button'

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

const StyledLink = styled(Link)`
  max-width: 20%;
  width: 100%;
  height: 130px;
`

const Home = (props) => {
  return (
    <Wrapper>
      <h1>Welcome to teach and go</h1>

      <div>
        <div>Recherches rapides</div>
        <CategoriesWrapper>
        <StyledLink to="/teachers/list/primaire"><Category><InnerText>Primaire</InnerText></Category></StyledLink>
          <StyledLink to="/teachers/list/secondaire"><Category><InnerText>Secondaire</InnerText></Category></StyledLink>
          <StyledLink to="/teachers/list/superieur"><Category><InnerText>Universitaire</InnerText></Category></StyledLink>
          <StyledLink to="/teachers/list/langues"><Category><InnerText>Langues</InnerText></Category></StyledLink>
        </CategoriesWrapper>
      </div>
    </Wrapper>
  )
}

export default Home