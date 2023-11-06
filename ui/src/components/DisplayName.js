import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NameDisplay = ({ name, date }) => {
  // Extract the first letter of the name to display in the badge
  const firstLetter = name? name.charAt(0):'a';

  return (
    <div className="name-display">
      <span className="circle-badge">{firstLetter}</span>
      <FontAwesomeIcon icon="fa-regular fa-circle-i" />
      <div className="name-info">
        <span className="name">{name}</span>
        <div className="date-time">
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NameDisplay;
