// src/pages/AppointmentPage.jsx
import React, { useState } from 'react';
import AppointmentCalendar from '../components/AppointmentCalendar';
import TimeSlots from '../components/TimeSlots';

const appointmentData = [
  { date: "2024-08-03", noresults: true, results: [] },
  { date: "2024-08-04", noresults: true, results: [] },
  { date: "2024-08-05", noresults: true, results: [] },
  { date: "2024-08-06", noresults: true, results: [] },
  { date: "2024-08-07", noresults: false, results: ["10:00", "10:30", "11:00", "11:30", "12:30", "13:30", "14:00", "14:30", "15:00"] },
  { date: "2024-08-08", noresults: true, results: [] },
  { date: "2024-08-09", noresults: true, results: [] },
  { date: "2024-08-10", noresults: false, results: ["10:30", "11:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"] }
];

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    const appointmentForDate = appointmentData.find(app => app.date === formattedDate);
    if (appointmentForDate && !appointmentForDate.noresults) {
      setAvailableTimes(appointmentForDate.results);
    } else {
      setAvailableTimes([]);
    }
  };

  return (
    <div className="appointment-page d-flex">
      <div className="calendar-container p-3">
        <AppointmentCalendar onDateChange={handleDateChange} />
      </div>
      <div className="time-slots-container p-3">
        <h4>Available times</h4>
        <TimeSlots availableTimes={availableTimes} />
      </div>
    </div>
  );
};

export default AppointmentPage;
