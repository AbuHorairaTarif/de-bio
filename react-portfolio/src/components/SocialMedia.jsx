import React, { useEffect, useState } from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    // Fetch social media data from the JSON file
    fetch('/data/socialMediaData.json')
      .then((response) => response.json())
      .then((data) => setSocialMedia(data.socialMedia))
      .catch((error) => console.error('Error fetching social media data:', error));
  }, []);

  return (
    <div className="social-media">
      <ul className="list-inline text-center">
        {socialMedia.map((platform, index) => (
          <li key={index} className="list-inline-item mx-2">
            <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={platform.platform}>
              <i className={`${platform.icon} fa-2x`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;