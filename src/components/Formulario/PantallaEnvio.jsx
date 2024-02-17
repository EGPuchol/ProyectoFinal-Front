import React from 'react';

const ConfirmationAlert = ({ message, illustration, onClose }) => {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-container">
        <button className="close-button" onClick={onClose}>X</button>
        <p>{message}</p>
        <img src={illustration} alt="Ilustración" />
      </div>
    </div>
  );
};

export default ConfirmationAlert;