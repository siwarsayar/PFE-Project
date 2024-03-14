import React from 'react';
import './AtomRadio.css'; 

const AtomRadio = ({ checked, onChange }) => {
  const handleToggle = () => {
    if (checked) {
      onChange(false);
    } else {
      onChange(true);
    }
  };

  return (
    <label className="RadioButton" onClick={handleToggle}>
      <input
        type="radio"
        checked={checked}
        onChange={() => {}}
        className="RadioButton-input"
      />
    </label>
  );
};

export default AtomRadio;
