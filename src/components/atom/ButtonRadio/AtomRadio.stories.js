import React, { useState } from 'react';
import { AtomRadio } from './AtomRadio'; 

export default {
  title: 'AtomRadio',
  component: AtomRadio,
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (value) => {
    setIsChecked(value);
  };

  return (
    <AtomRadio checked={isChecked} onChange={handleChange} />
  );
};


