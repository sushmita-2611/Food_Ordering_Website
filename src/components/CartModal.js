import React from 'react';
import './AuthModal.css'; 

function CartModal({ cartItems, onClose }) {
  const deliveryFee = 30;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div>
              {cartItems.map((item, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <strong>{item.title}</strong><br />
                  Price: ₹{item.price} &nbsp;|&nbsp; Qty: {item.quantity}<br />
                  Total: ₹{item.price * item.quantity}
                </div>
              ))}
            </div>

            <hr style={{ margin: '20px 0' }} />
            <h3 style={{ marginBottom: '10px' }}>Cart Total</h3>

            <p>Subtotal: ₹{subtotal}</p>
            <p>Delivery Fee: ₹{deliveryFee}</p>
            <p><strong>Total: ₹{total}</strong></p>

            <button style={{ marginTop: '15px' }}>Proceed to Pay</button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
