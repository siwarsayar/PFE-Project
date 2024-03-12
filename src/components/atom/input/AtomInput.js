import React from 'react';
import './AtomInput.css';

const AtomInput = (props) => {
  const { required, type, id, name, value, onChange, placeholder } = props;

  return (
    <input
      {...(type && { type })}
      {...(id && { id })}
      {...(name && { name })}
      {...(value && { value })}
      {...(onChange && { onChange })}
      {...(placeholder && { placeholder })}
      {...(required && { required })}
      className="AtomInput"
    />
  );
};

export default AtomInput;