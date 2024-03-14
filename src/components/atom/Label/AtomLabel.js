import React from 'react';
import './AtomLabel.css'; 

const AtomLabel = ({ text }) => {
  return (
    <label className="AtomLabel">
      {text}
    </label>
  );
};

export default AtomLabel;
