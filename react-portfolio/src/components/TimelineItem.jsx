import React from 'react';
import './Timeline.css'; // Import the CSS for timeline styling

const TimelineItem = ({ title, organization, year, description, isRight }) => {
  return (
    <div className={`timeline-item ${isRight ? 'right' : 'left'}`}>
      <div className="timeline-content">
        <h4>{title}</h4>
        <h5 className="text-muted">{organization}</h5>
        <span className="text-muted">{year}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
