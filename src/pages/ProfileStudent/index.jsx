import React from 'react'
import styled from "styled-components"
import pic from "../../static/images/Marc.jpg"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

const Image = styled.img`
  border-radius: 20px;
  max-width: 25%;
`

const Head = styled.div`
  display: flex;
  max-width: 1000px;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding: 20px;
`

const Mid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
`

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
`

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
`

const Info = styled.p`
  margin-top: 20px;
`

const Body = styled.div`
  background-color: #F4A261;
`

const ProfileStudent = (props) => {
  const { id } = props.match.params
  return (
    <>
      <Head>
        <Image src={pic} alt='Marc' />
        <Mid>
          <h1>Marc</h1>
          <p>Salut je m'appelle Marc. Reservez moi, je coute pas cher</p>
        </Mid>
      </Head>
      <Body>
        <div>Truc</div>
        <div>Truc</div>
        <div>Truc</div>
        <div>Truc</div>
        <div>Truc</div>
        <div>Truc</div>
      </Body>
    </>
  )
}

export default ProfileStudent