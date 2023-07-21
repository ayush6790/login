import React, { useState, useEffect } from 'react';
import Opphn from './peakpx.jpg'


const CountdownTimer = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2023-07-22 19:05:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        setCountdown('Countdown has ended!');
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown(`Time left for Oppenheimer: ${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div>
           <p style={{backgroundColor: 'rgb(0,0,0,0.86)',color:'white', fontSize:'30px', margin:'0',fontFamily:'cursive'}}>  {countdown} </p> 
 
              <img src={Opphn} alt="opphn" height ="1080" width="1980" />

      
      {/* You can add additional JSX here if needed */}
    </div>
  );
};

export default CountdownTimer;
