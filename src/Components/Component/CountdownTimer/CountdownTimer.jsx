import React, { useEffect, useState } from "react";
import "./CountdownTimer.scss"; // Import the SCSS file

const CountdownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="countdown-container">
      <div className="timer-segment">
        <p className="time">{formatTime(timeLeft.hours)}</p>
        <p className="label">Hours</p>
      </div>
      <div className="separator">:</div>
      <div className="timer-segment">
        <p className="time">{formatTime(timeLeft.minutes)}</p>
        <p className="label">Minutes</p>
      </div>
      <div className="separator">:</div>
      <div className="timer-segment">
        <p className="time">{formatTime(timeLeft.seconds)}</p>
        <p className="label">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
