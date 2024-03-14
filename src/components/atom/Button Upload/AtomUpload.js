import React from 'react';
import './AtomUpload.css'; 

const AtomUpload = ({ onFileUpload }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      className="UploadButton" 
      onDrop={handleDrop} 
      onDragOver={handleDragOver}
    >
      <input
        id="file-upload"
        type="file"
        onChange={(e) => onFileUpload(e.target.files[0])}
        className="UploadButton-input"
      />
    </div>
  );
};

export default AtomUpload;
