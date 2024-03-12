import React from 'react';
import './AtomText.css'; 

const AtomText = ({ type, text , nameClass }) => {
  const Tag = type ? type : 'span';

  return <Tag className={nameClass}>{text}</Tag>;
};

export default AtomText;