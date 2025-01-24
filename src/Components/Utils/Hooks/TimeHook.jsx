import { useState, useEffect } from "react";

const useTimer = (endpoint) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  

  useEffect(() => {
    // Define a function to fetch remaining time
    const fetchRemainingTime = async () => {
      try {
        const response = await fetch(`http://localhost:30000/api/timer/${endpoint}`);
        const data = await response.json();
        setTimeLeft(data);
      } catch (error) {
        console.error("Error fetching remaining time:", error);
      }
    };

    // Fetch initially
    fetchRemainingTime();

    // Set an interval to keep fetching updated time
    const intervalId = setInterval(() => {
      fetchRemainingTime();
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [endpoint]); // Re-run effect if fetchUrl changes

  return timeLeft;
};

export default useTimer;
