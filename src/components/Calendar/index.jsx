import React from 'react'
import {
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const Calendar = ({ children, style, ...rest }) => {

  function test() {
    alert('ca marche pas')
  }
  return (

    <Appointments.Appointment
      {...rest}
      style={{
        ...style,
        backgroundColor: '#FFC107',
        borderRadius: '8px',
      }}
      // onClick={test}
      draggable={true}
    >
      {children}
    </Appointments.Appointment>
  )
}

export default Calendar