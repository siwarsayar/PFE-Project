import React from 'react';
import AtomUpload from '../../atom/Button Upload/AtomUpload'; 
import AtomLabel from '../../atom/Label/AtomLabel'; 
import './ButtonUpload.css'; 

const ButtonUpload = ({ labelText, onFileUpload }) => {
    return (
        <div className="UploadWithLabel">
          <AtomLabel text={labelText} />
          <AtomUpload onFileUpload={onFileUpload} />
        </div>
      );
    };

export default ButtonUpload;
