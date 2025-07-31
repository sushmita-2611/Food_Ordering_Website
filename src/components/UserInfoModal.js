import React from 'react';
import './AuthModal.css'; 
function UserInfoModal({ onClose }) {
  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 style={{ fontWeight: 'bold' }}>Login to FoodPie</h2>
        <p>Your delicious food is waiting for you...<br />So log in to order your food items.</p>
      </div>
    </div>
  );
}

export default UserInfoModal;
