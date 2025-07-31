// src/components/AuthModal.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './AuthModal.css';

function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const modalContent = (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>{isLogin ? 'Login' : 'Create Account'}</button>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            style={{ color: '#ff4d00', cursor: 'pointer' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Create one' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}

export default AuthModal;
