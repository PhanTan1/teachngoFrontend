import React, { useState, useEffect } from 'react'
import styled from "styled-components"
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
import Calendar from "../../components/Calendar"
import { appointments } from "../../static/data/appoitments"
import AvailabilityService from "../../services/AvailabilityService"

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
`

const Reservation = (props) => {
  const [data, setRdv] = useState([])

  const [currentDate, setCurrecntDate] = useState(new Date())

  function currentDateChange(currentDate) {
    setCurrecntDate(currentDate)
  };

  useEffect(() => {
    AvailabilityService.getAvailabilities(props.match.params.id, setRdv)
  }, [])

  return (
    <Wrapper>
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
    </Wrapper>
  )

}

export default Reservation;