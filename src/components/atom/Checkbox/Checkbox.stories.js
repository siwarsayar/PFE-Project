import React, { useState } from 'react';
import { Checkbox } from './Checkbox'; 

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Checkbox checked={isChecked} onChange={handleChange} />
  );
};


