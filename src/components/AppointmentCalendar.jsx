// src/components/AppointmentCalendar.jsx
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentCalendar = ({ onDateChange }) => {
  return <Calendar onChange={onDateChange} minDetail="month" />;
};

export default AppointmentCalendar;
