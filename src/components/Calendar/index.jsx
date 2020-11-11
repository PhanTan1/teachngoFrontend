import React from 'react'
import {
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const Calendar = ({children, style, ...rest}) => {

  return (

    <Appointments.Appointment
      {...rest}
      style={{
        ...style,
        backgroundColor: '#FFC107',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  )
}

export default Calendar