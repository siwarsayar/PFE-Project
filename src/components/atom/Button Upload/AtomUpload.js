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
      // Si vous voulez styliser l'apparence de la zone de dépôt, vous pouvez ajouter des classes CSS ici
    >
      <label htmlFor="file-upload" className="UploadButton-label">
        Glissez-déposez ou cliquez ici pour choisir un fichier
      </label>
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
