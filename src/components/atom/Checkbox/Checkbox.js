import React from 'react';
import './Checkbox.css'; 

const Checkbox = ({ checked, onChange }) => {
  return (
    <div className="Checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="Checkbox-input"
      />
      <span className="Checkbox-custom"></span>
    </div>
  );
};

export default Checkbox;
