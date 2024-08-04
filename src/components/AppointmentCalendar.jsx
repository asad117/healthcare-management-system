// src/components/AppointmentCalendar.jsx
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentCalendar = ({ onDateChange }) => {
  return (
    <Calendar 
      onChange={onDateChange} 
      minDetail="month" // to limit view to month and below
    />
  );
};

export default AppointmentCalendar;
