import React, { useState, useEffect } from 'react';

const CounterCard = ({ title, count, duration }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(count / (duration * 1000 / 50)); // increment in each interval
    const interval = setInterval(() => {
      start += increment;
      if (start >= count) {
        start = count; // make sure it doesn't exceed the final value
        clearInterval(interval); // clear the interval when we reach the target count
      }
      setCurrentCount(start);
    }, 50); // interval time in milliseconds
    return () => clearInterval(interval); // cleanup
  }, [count, duration]);

  return (
    <div className="counter-card text-center p-4 m-2 border  shadow">
      <h3 className="count-number">{currentCount}</h3>
      <p className="count-title">{title}</p>
    </div>
  );
};

export default CounterCard;
