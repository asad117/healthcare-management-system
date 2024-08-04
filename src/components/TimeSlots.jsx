// src/components/TimeSlots.jsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const TimeSlots = ({ availableTimes }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log("Selected Time:", time);
  };

  if (availableTimes.length === 0) {
    return <p>No available times.</p>;
  }

  return (
    <div className="time-slots">
      {availableTimes.map((time, index) => (
        <Button 
          key={index} 
          variant={time === selectedTime ? "primary" : "outline-primary"} 
          className="m-2"
          onClick={() => handleTimeClick(time)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
};

export default TimeSlots;
