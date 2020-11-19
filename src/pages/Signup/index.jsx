import React from 'react'
import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { Formik } from "formik"
import Button from "../../components/Button"
import SignupService from "../../services/SignupService"

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 142px);
  background-color: #264653;
  padding: 50px 20px;
`

const Box = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.3);
  background-color: white;
`

const SmallInput = styled(TextField)`
  width: 45%
`

const DropDown = styled(FormControl)`
  width: 45%
`

const SingleFieldWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  width: 90%;
`

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 30px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonWrapper = styled.div`
  width: 250px;
  display: flex;
  margin: 30px auto;
  justify-content: space-between;
`

const initialValues = {
  firstName: '',
  gender: "",
  lastName: '',
  email: '',
  login: '',
  password: '',
  phone: '',
  adress: {
    street: 'rue',
    streetNumber: '3',
    postalCode: '1808',
    country: 'BELGIUM',
    boxNumber: '1'
  },
  accounts: [],
}

export default function Signup(props) {
  return (
    <Container>
      <Box>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log(values)

            SignupService.registerNewUser(values)
          }}>
          {props =>
            <Form>
              <FieldWrapper>
                <SmallInput
                  id="standard-basic"
                  label="Nom"
                  name="lastName"
                  onChange={props.handleChange}
                />
                <SmallInput
                  id="standard-basic"
                  label="Prenom"
                  name="firstName"
                  onChange={props.handleChange}
                />
              </FieldWrapper>
              <FieldWrapper>
                <SmallInput
                  id="standard-basic"
                  label="Nom d'utilisateur"
                  name="login"
                  onChange={props.handleChange}
                />
                <DropDown>
                  <InputLabel htmlFor="gender-drop">Genre</InputLabel>
                  <Select
                    native
                    value={props.values.gender}
                    onChange={props.handleChange}
                    inputProps={{
                      name: 'gender',
                      id: 'gender-drop',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value='male'>Masculin</option>
                    <option value='female'>Feminin</option>
                    <option value='other'>Autre</option>
                  </Select>
                </DropDown>
              </FieldWrapper>
              <FieldWrapper>
                <SmallInput
                  id="standard-basic"
                  label="Email"
                  name="email"
                  onChange={props.handleChange}
                />
                {/* <SmallInput
                  id="standard-basic"
                  label="Confirmer l'email"
                  name="confirmEmail"
                  onChange={props.handleChange}
                /> */}
              </FieldWrapper>
              <FieldWrapper>
                <SmallInput
                  id="standard-basic"
                  label="Mot de passe"
                  name="password"
                  onChange={props.handleChange}
                  type="password"
                />
                {/* <SmallInput
                  id="standard-basic"
                  label="Confirmer le mot de passe"
                  name="confirmPassword"
                  onChange={props.handleChange}
                  type="password"
                /> */}
              </FieldWrapper>
              <SingleFieldWrapper>
                <SmallInput
                  id="standard-basic"
                  label="Numero de telephone"
                  name="phone"
                  onChange={props.handleChange}
                />
              </SingleFieldWrapper>
              <ButtonWrapper>
                <Button color="secondary">Effacer</Button>
                <Button color="primary" onClick={props.handleSubmit}>Enregistrer</Button>
              </ButtonWrapper>
            </Form>
          }
        </Formik>
      </Box>
    </Container>
  )
}