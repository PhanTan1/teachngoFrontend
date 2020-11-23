import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Button from "../../components/Button"
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  DateNavigator,
  TodayButton,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import { appointments } from "../../static/data/appoitments"
import AvailabilityService from "../../services/AvailabilityService"

import visa from "../../static/logo/visa.png"
import mastercard from "../../static/logo/mastercard.png"
import paypal from "../../static/logo/paypal.png"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden
  }
`

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
`

const Modal = styled.div`
  background-color: rgba(0,0,0,.6);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

const ModalInner = styled.div`
  width: 400px;
  padding: 30px;
  min-height: 350px;
  background-color: white;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Text = styled.div`
  font-size: 16px;
`

const Label = styled.label`
  max-width: 50px;
  width: 100%;

  img{
    width: 100%;
  }
`

const Radio = styled.input`
  margin-left: 10px;
`

const PaymentMethod = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Reservation = (props) => {
  const [data] = useState([...appointments])
  const [modal, setModal] = useState(false)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [innerContent, setInnerContent] = useState('confirm')
  const [method, setMethod] = useState('visa')

  const [currentDate, setCurrecntDate] = useState(new Date())

  function currentDateChange(currentDate) {
    setCurrecntDate(currentDate)
  };

  function Calendar({ children, style, ...rest }) {
    function handleTime() {
      setStartTime(rest.data.startDate)
      setEndTime(rest.data.endDate)
      setModal(true);
    }
    return (

      <Appointments.Appointment
        {...rest}
        style={{
          ...style,
          backgroundColor: '#FFC107',
          borderRadius: '8px',
        }}
        onClick={handleTime}
        draggable={true}
      >
        {children}
      </Appointments.Appointment>
    )
  }

  function handleRadio(e) {
    setMethod(e.target.value)
  }

  // useEffect(() => {
  //   AvailabilityService.getAvailabilities(props.match.params.id, setRdv)
  // }, [])

  return (
    <Wrapper>
      {modal ?
        <>
          <GlobalStyle />
          <Modal>
            <ModalInner>
              {innerContent === 'confirm' ?
                <>
                  <Text>
                    <p>{`Vous etes sur le point de reserver la plage horaire de ${startTime} a ${endTime}`}</p>
                    <p>En confirmant vous allez acceder a l'ecran de paiement.</p>
                  </Text>
                  <div>
                    <Button color="secondary" onClick={() => setModal(false)}>Annuler</Button>
                    <Button color="primary" onClick={() => setInnerContent('payment')}>Confirmer</Button>
                  </div>
                </>
                :
                <>
                  <PaymentMethod>
                    <fieldset>
                      <Label><img src={visa} alt="visa" /></Label>
                      <Radio type="radio" name="method" value="visa" onChange={handleRadio} />
                    </fieldset>
                    <fieldset>
                      <Label><img src={mastercard} alt="mastercard" /></Label>
                      <Radio type="radio" name="method" value="mastercard" onChange={handleRadio} />
                    </fieldset>
                    <fieldset>
                      <Label><img src={paypal} alt="paypal" /></Label>
                      <Radio type="radio" name="method" value="paypal" onChange={handleRadio} />
                    </fieldset>
                  </PaymentMethod>
                  <form>
                    {
                      method === 'visa' || method === 'mastercard' ?
                        <div>{`Paiement avec ${method}`}</div>
                        :
                        <div>Connectez votre compte paypal</div>
                    }
                  </form>
                  <div>
                    <Button color="secondary" onClick={() => setModal(false)}>Annuler</Button>
                    <Button color="primary" >Payer</Button>
                  </div>
                </>
              }
            </ModalInner>
          </Modal>
        </>
        : null
      }
      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments
            appointmentComponent={Calendar}
          />
        </Scheduler>
      </Paper>
    </Wrapper >
  )

}

export default Reservation;