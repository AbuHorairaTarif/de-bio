import React from 'react';
import CounterCard from './CounterCard';
import './CounterList.css';

const CounterList = () => {
  const counters = [
    { id: 1, title: 'Projects Completed', count: 120, duration: 3 },
    { id: 2, title: 'Happy Clients', count: 85, duration: 3 },
    { id: 3, title: 'Awards Won', count: 15, duration: 2.5 },
    { id: 4, title: 'Years of Experience', count: 5, duration: 2 },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {counters.map((counter) => (
          <div className="col-md-3" key={counter.id}>
            <CounterCard
              title={counter.title}
              count={counter.count}
              duration={counter.duration} // Set how long the animation lasts
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterList;
