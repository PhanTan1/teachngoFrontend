import React, { useState } from 'react'
import styled from "styled-components"
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  EditRecurrenceMenu,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import Calendar from "../../components/Calendar"
import { appointments } from "../../static/data/appoitments"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Reservation = (props) => {
  const [rdv, setRdv] = useState({
    data: appointments,
    currentDate: '2018-06-27',
  })

  const { data, currentDate } = rdv;

  function test() {
    alert("ca marche")
  }

  return (
    <Wrapper>
      <div>Reserver</div>


      <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Appointments
            appointmentComponent={Calendar}
            onClick={test}
          />
          {/* <EditRecurrenceMenu />
          <DragDropProvider /> */}
        </Scheduler>
      </Paper>
    </Wrapper>
  )

}

export default Reservation;