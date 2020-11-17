import React from 'react'
import styled from "styled-components"
import pic from "../../static/images/Marc.jpg"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

const Image = styled.div`
  border-radius: 20px;
  max-width: 300px;
  width: 100%;
  height: 250px;
  background-image: url(${props => props.bg ? props.bg : null});
  background-size: cover;
  background-position: center;
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
  width: 100%;
  display: flex; 
  justify-content: space-around;
  margin: 0 auto;
  background-color: rgba(42, 157, 143, .7);
  padding: 20px;
`

const InfoBox = styled.div`
  width: 30%;
  background-color: white;
  padding: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    :hover {
        color: inherit;
        text-decoration: none;
    }
`


const ProfileTeacher = (props) => {
  const { id } = props.match.params
  return (
    <>
      <Head>
        <Image bg={pic} alt='Marc' />
        <Mid>
          <h1>Marc</h1>
          <p>Salut je m'appelle Marc. Reservez moi, je coute pas cher</p>
          <Comment>
            <div>Jacques</div>
            <p>Moi j'ai commande Marc exellent prof</p>
          </Comment>
        </Mid>
        <OrderBox>
          <div>10€/h</div>
          <ButtonWrapper>
            <StyledLink to={`/teachers/${id}/reservation`}>
              <Button color="secondary" >Reserver</Button>
            </StyledLink>
          </ButtonWrapper>
          <Info>
            <div>Premier cours payant</div>
            <p>dskjfnsdkngdjsknjdsnvndskjvnksjdv</p>
          </Info>
        </OrderBox>
      </Head>
      <Body>
        <InfoBox>
          <h3>Informations</h3>
          <p>
            Maecenas vel enim id orci lacinia pharetra.
            Suspendisse quis tincidunt augue.
            Ut laoreet risus sit amet mauris euismod, vel vestibulum ex consequat.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Praesent leo libero, eleifend id est sed, malesuada dictum leo.
            Vivamus sagittis ex vitae cursus ultrices.
            Phasellus et felis et turpis laoreet egestas.
            Donec accumsan suscipit ante, ut aliquet ex.
          </p>
        </InfoBox>
        <InfoBox>
          <h3>Consignes</h3>
          <p>Morbi aliquet imperdiet sem nec volutpat.
          Fusce non imperdiet arcu. Integer egestas orci nec ipsum tempor faucibus.
          Praesent turpis dui, mattis id lacus et, finibus ornare eros. Vivamus vitae magna sapien.
          Cras euismod nisl sit amet eros gravida, vitae porta urna sodales. Proin eget rhoncus est.
          Nullam enim massa, faucibus sit amet egestas non, fringilla auctor felis.
          Mauris porttitor rhoncus ipsum at feugiat. Nunc lacinia tincidunt lectus, eget accumsan massa gravida id.
          Morbi vitae leo urna. Nunc in efficitur sem. Maecenas id velit semper, ullamcorper dui eu, fermentum dui.
          Proin eu iaculis metus, et ullamcorper sem.
          Mauris nunc nisl, dictum sit amet erat sit amet, porta pretium tellus. Sed eu ex nisl.
            </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Mauris imperdiet tellus egestas dignissim auctor. Sed vel maximus nisi.
            Nullam sed mi vitae dolor placerat hendrerit sed hendrerit dui.
            Vivamus eget risus ac tortor maximus lobortis at ac eros. Nulla volutpat in nibh sit amet tincidunt.
            Nunc ultricies erat dui, vitae volutpat ex tristique eu. Maecenas felis elit, tincidunt sit amet laoreet quis, fermentum vitae ligula.
            In hac habitasse platea dictumst. Vestibulum in libero id sem tincidunt hendrerit. Phasellus eget lorem nisi.
            </p>
        </InfoBox>
        <InfoBox >
          <h3>Something</h3>
        </InfoBox>
      </Body>
    </>
  )
}

export default ProfileTeacher