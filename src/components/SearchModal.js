import React, { useState } from 'react';
import './SearchModal.css';

const SearchModal = ({ onClose, foodItems }) => {
  const [query, setQuery] = useState('');

  const filteredItems = foodItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Search Food</h2>
        <input
          type="text"
          placeholder="Type food name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <div className="search-results">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div key={index} className="search-item">
                  <p>{item.title} — ₹{item.price}</p>
                </div>
              ))
            ) : (
              <p className="no-result">No items found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
