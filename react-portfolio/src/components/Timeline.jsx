import React, { useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Fetch the timeline data from the local JSON file
    fetch('/data/timelineData.json')
      .then((response) => response.json())
      .then((data) => setTimelineData(data))
      .catch((error) => console.error('Error fetching the timeline data:', error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Work Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            organization={item.organization}
            year={item.year}
            description={item.description}
            isRight={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
