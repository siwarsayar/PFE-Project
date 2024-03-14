import React from 'react';
import AtomInput from '../../atom/input/AtomInput';
import './Input.css'; 

const Input = ({ label, errorMessage, ...inputProps }) => {
  return (
    <div className="InputMolecule">
      <label className="InputMolecule-label">{label}</label>
      <AtomInput {...inputProps} />
      {errorMessage && <div className="InputMolecule-error">{errorMessage}</div>}
    </div>
  );
};

export default Input;
