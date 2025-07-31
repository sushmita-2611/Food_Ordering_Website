import React from 'react';
import './Cart.css';
import { FaTrashAlt } from 'react-icons/fa';


function Cart({ items, removeFromCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2 className="cart-heading">🛒 Your Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="cart-item">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <button className="remove-btn" onClick={() => removeFromCart(index)}>
              <FaTrashAlt />
            </button>
          </div>
        ))
      )}
      <h3 className="cart-total">Total: ₹{total}</h3>
    </div>

    
  );
}

export default Cart;