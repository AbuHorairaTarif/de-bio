import React from 'react';
import './Timeline.css'; // Import the CSS for timeline styling

const TimelineItem = ({ title, organization, year, description, isRight, keyAchievement }) => {
  return (
    <div className={`timeline-item ${isRight ? 'right' : 'left'}`}>
      <div className="timeline-content">
        <h4>{title}</h4>
        <h5 className="text-muted fw-bold">{organization}</h5>
        <span className="text-muted">{year}</span>
        {description && (
          <ul>
            {description.map((item, index) => (
              <li key={index} className='list-style-disc'>{item}</li>
            ))}
          </ul>
        )}
        {keyAchievement && (
          <>
            <strong>Key Achievement:</strong> {keyAchievement}
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
