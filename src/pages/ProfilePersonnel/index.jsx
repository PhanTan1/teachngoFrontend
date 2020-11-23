import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import pic from "../../static/images/Marc.jpg"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import TeacherService from "../../services/TeacherService"
import StudentService from "../../services/StudentService"

const Image = styled.div`
  border-radius: 20px;
  max-width: 300px;
  width: 100%;
  height: 250px;
  background-image: url(${props => props.bg ? props.bg : null});
  background-size: cover;
  background-position: center;
`

const Intro = styled.p`
  text-align: left;
`

const Head = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding: 20px;
`

const Mid = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 50%;
  width: 100%;
  margin-left: 20px;
  min-height: 250px;
`

const Comment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid #2A9D8F;
  border-radius: 5px;
  padding: 10px;
`

const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  margin-left: 20px;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
`

const Info = styled.div`
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

const LeftColumn = styled.div`
  width: 30%;
  background-color: white;
  padding: 10px;
  `

const RightColumn = styled.div`
  width: 60%;
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

const Prix = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: #E76F51;
`

const SectionTitle = styled.h3`
  padding-bottom: 10px;
  border-bottom: solid 1px  rgb(42, 157, 143);
`

const InfoContent = styled.p`
  padding: 10px;
  text-align: left;
`

const Comments = styled.div`
  width: 100%;
`

const CommentWrapper = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 1000px;
`

const roles = {
  'ROLE_ADMIN': 'admin',
  'ROLE_TEACHER': 'teacher',
  'ROLE_STUDENT': 'student',
}


const PersonalProfile = (props) => {
  const { id } = props.match.params
  const [user, setUser] = useState()
  const [role, setRole] = useState('')

  useEffect(() => {
    if (props.role === 'teacher') {
      TeacherService.getTeacherById(id).then(res => {
        setUser(res)
        setRole(roles[res.authorities[0].authority])
      })
    } else {
      StudentService.getStudentById(id).then(res => {
        setUser(res)
        setRole(roles[res.authorities[0].authority])
      })
    }
  }, [])

  return (
    user ?
      <>
        <Head>
          <Image bg={pic} alt='Marc' />
          <Mid>
            <h1>Marc</h1>
            <Comment>
              <div>Jacques</div>
              <p>Moi j'ai commande Marc exellent prof</p>
            </Comment>
          </Mid>
          <OrderBox>
            {role === 'teacher' ?
              <Button>Ajouter un cours</Button>
              : null
            }
          </OrderBox>
        </Head>
        {role === "teacher" ?
          <>
            <Body>
              <LeftColumn>
                <SectionTitle>Informations</SectionTitle>
                <InfoContent>
                  Maecenas vel enim id orci lacinia pharetra.
                  Suspendisse quis tincidunt augue.
                  Ut laoreet risus sit amet mauris euismod, vel vestibulum ex consequat.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                  Praesent leo libero, eleifend id est sed, malesuada dictum leo.
                  Vivamus sagittis ex vitae cursus ultrices.
                  Phasellus et felis et turpis laoreet egestas.
                  Donec accumsan suscipit ante, ut aliquet ex.
          </InfoContent>
              </LeftColumn>
              <RightColumn>
                <div>
                  <SectionTitle>Bio</SectionTitle>
                  <InfoContent>
                    Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher Salut je m'appelle Marc. Reservez moi, je coute pas cher
          </InfoContent>
                </div>
                <div>
                  <SectionTitle>Consignes</SectionTitle>
                  <InfoContent>Morbi aliquet imperdiet sem nec volutpat.
                  Fusce non imperdiet arcu. Integer egestas orci nec ipsum tempor faucibus.
                  Praesent turpis dui, mattis id lacus et, finibus ornare eros. Vivamus vitae magna sapien.
                  Cras euismod nisl sit amet eros gravida, vitae porta urna sodales. Proin eget rhoncus est.
                  Nullam enim massa, faucibus sit amet egestas non, fringilla auctor felis.
                  Mauris porttitor rhoncus ipsum at feugiat. Nunc lacinia tincidunt lectus, eget accumsan massa gravida id.
                  Morbi vitae leo urna. Nunc in efficitur sem. Maecenas id velit semper, ullamcorper dui eu, fermentum dui.
                  Proin eu iaculis metus, et ullamcorper sem.
                  Mauris nunc nisl, dictum sit amet erat sit amet, porta pretium tellus. Sed eu ex nisl.
          </InfoContent>
                  <InfoContent>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Mauris imperdiet tellus egestas dignissim auctor. Sed vel maximus nisi.
                    Nullam sed mi vitae dolor placerat hendrerit sed hendrerit dui.
                    Vivamus eget risus ac tortor maximus lobortis at ac eros. Nulla volutpat in nibh sit amet tincidunt.
                    Nunc ultricies erat dui, vitae volutpat ex tristique eu. Maecenas felis elit, tincidunt sit amet laoreet quis, fermentum vitae ligula.
                    In hac habitasse platea dictumst. Vestibulum in libero id sem tincidunt hendrerit. Phasellus eget lorem nisi.
          </InfoContent>
                </div>
              </RightColumn>


            </Body>
            <Comments>
              <CommentWrapper>
                <SectionTitle>Commentaires</SectionTitle>
              </CommentWrapper>
            </Comments>
          </>
          :
          <Comments>
            <CommentWrapper>
              <SectionTitle>Liste des reservations</SectionTitle>
            </CommentWrapper>
          </Comments>
        }
      </>
      : null
  )
}

export default PersonalProfile