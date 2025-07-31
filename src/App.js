import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Cart from './components/Cart';
import HeroBanner from './components/HeroBanner';
import './App.css';
import AuthModal from './components/AuthModal';
import UserInfoModal from './components/UserInfoModal';
import CartModal from './components/CartModal';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const foodItems = [
  { title:'Greek Salad', price: 299 },
  { title:'veg Salad', price: 99 },
  { title:'Clover Salad', price: 399 },
  { title:'Chicken Salad', price: 109 },
  { title:'Lasagna Rolls', price: 160 },
  { title:'Peri Peri Rolls', price: 199 },
  { title:'Chicken Rolls', price: 299 },
  { title:'Veg Rolls', price: 149 },
  { title:'Ripple IceCream', price: 270 },
  { title:'Fruit IceCream', price: 207 },
  { title:'Jar IceCream', price: 193 },
  { title:'Vanilla IceCream', price: 120 },
  { title:'Vegan Sandwich', price: 110 },
  { title:'Chicken Sandwich', price: 149 },
  { title:'Grilled Sandwich', price: 99 },
  { title:'Veggie and hummus Sandwich', price: 189},
  { title: 'Garlic Butter Mashroom', price: 370},
  { title:'Fried Cauliflower', price: 99 },
  { title: 'Mix Veg Pulao', price: 89},
  { title: 'Rice Zucchini', price: 149},
  ];

  return (
    <div className="App">
      <Header onSignInClick={() => setShowModal(true)}
      onUserIconClick={() => setShowUserModal(true)} 
      onCartClick={() => setShowCartModal(true)}
      onSearchClick={() => setShowSearchModal(true)}
      />
      
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      {showUserModal && <UserInfoModal onClose={() => setShowUserModal(false)} />}
      {showCartModal && <CartModal cartItems={cartItems} onClose={() => setShowCartModal(false)} />}
      {showSearchModal && (
          <SearchModal
            foodItems={foodItems}
            onClose={() => setShowSearchModal(false)}
          />
      )}
      <HeroBanner />
      <Menu addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
      <Footer/>
    </div>
  );
}

export default App;

