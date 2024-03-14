import React from 'react';
import AtomLabel from '../../atom/Label/AtomLabel';
import Checkbox from '../../atom/Checkbox/Checkbox';
import './CheckBox.css'; 

const CheckBox= ({ label, checked, onChange }) => {
  return (
    <div className="Checkbox">
      <Checkbox checked={checked} onChange={onChange} />
      <AtomLabel text={label} />
    </div>
  );
};

export default CheckBox;
