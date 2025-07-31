import React from 'react';
import './Menu.css';
import saladImg from '../assets/images/menu_1.png';
import RollsImg from '../assets/images/menu_2.png';
import DesertsImg from '../assets/images/menu_3.png';
import SandwichImg from '../assets/images/menu_4.png';
import CakeImg from '../assets/images/menu_5.png';
import PureVegImg from '../assets/images/menu_6.png';
import PastaImg from '../assets/images/menu_7.png';

import GreekSaladImg from '../assets/images/Greek Salad.png';
import VegSaladImg from '../assets/images/Veg Salad.png';
import CloverSaladImg from '../assets/images/Clover Salad.png';
import ChickenSaladImg from '../assets/images/Chicken Salad.png';

import LasagnaRollsImg from '../assets/images/Lasagna Rolls.png';
import PeriPeriRollsImg from '../assets/images/Peri Peri Rolls.png';
import ChickenRollsImg from '../assets/images/Chicken Rolls.png';
import VegRollsImg from '../assets/images/Veg Rolls.png';

import RippleIceCreamImg from '../assets/images/Ripple IceCream.png';
import FruitIceCreamImg from '../assets/images/Fruit IceCream.png';
import JarIceCreamImg from '../assets/images/Jar IceCream.png';
import VanillaIceCreamImg from '../assets/images/Vanilla IceCream.png';

import VeganSandwichImg from '../assets/images/Vegan Sandwich.png';
import ChickenSandwichImg from '../assets/images/Chicken Sandwich.png';
import GrilledSandwichImg from '../assets/images/Grilled Sandwich.png';
import VeggieandhummusSandwichImg from '../assets/images/Veggie and hummus Sandwich.png';

import GarlicButterMashroomImg from '../assets/images/Garlic Butter Mashroom.png';
import FriedCauliflowerImg from '../assets/images/Fried Cauliflower.png';
import MixVegPulaoImg from '../assets/images/Mix Veg Pulao.png';
import RiceZucchiniImg from '../assets/images/Rice Zucchini.png';

const foodItemsList = [
  { name: 'Salad', img: saladImg },
  { name: 'Rolls', img: RollsImg },
  { name: 'Deserts', img: DesertsImg },
  { name: 'Sandwich', img: SandwichImg },
  { name: 'Cake', img: CakeImg },
  { name: 'Pure Veg', img: PureVegImg },
  { name: 'Pasta', img: PastaImg },
];

const foodItems1 = [
  { name: 'Greek Salad', price: 299, img: GreekSaladImg },
  { name: 'veg Salad', price: 99, img: VegSaladImg },
  { name: 'Clover Salad', price: 399, img: CloverSaladImg },
  { name: 'Chicken Salad', price: 109, img: ChickenSaladImg },
];

const foodItems2 = [
  { name: 'Lasagna Rolls', price: 160, img: LasagnaRollsImg },
  { name: 'Peri Peri Rolls', price: 199, img: PeriPeriRollsImg },
  { name: 'Chicken Rolls', price: 299, img: ChickenRollsImg },
  { name: 'Veg Rolls', price: 149, img: VegRollsImg},
];

const foodItems3 = [
  { name: 'Ripple IceCream', price: 270, img: RippleIceCreamImg },
  { name: 'Fruit IceCream', price: 207, img: FruitIceCreamImg },
  { name: 'Jar IceCream', price: 193, img: JarIceCreamImg },
  { name: 'Vanilla IceCream', price: 120, img: VanillaIceCreamImg },
];

const foodItems4 = [
  { name: 'Vegan Sandwich', price: 110, img: VeganSandwichImg },
  { name: 'Chicken Sandwich', price: 149, img: ChickenSandwichImg },
  { name: 'Grilled Sandwich', price: 99, img: GrilledSandwichImg },
  { name: 'Veggie and hummus Sandwich', price: 189, img: VeggieandhummusSandwichImg },
];

const foodItems5 = [
  { name: 'Garlic Butter Mashroom', price: 370, img: GarlicButterMashroomImg },
  { name: 'Fried Cauliflower', price: 99, img: FriedCauliflowerImg },
  { name: 'Mix Veg Pulao', price: 89, img: MixVegPulaoImg },
  { name: 'Rice Zucchini', price: 149, img: RiceZucchiniImg },
];

function Menu({ addToCart }) {
  return (
    <div className="menu" id="menu">
      <h3 className="menu-heading">Explore Our Menu</h3>
      <div className="menu-subtext">
        <p className="menu-line">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your</p>
        <p className="menu-line">cravings and elevate your dining experience, one delicious meal at a time.</p>
      </div>
      <div className='explore-menu-list'>
        {foodItemsList.map((item, index) => {
            return(  
                <div key={index} className="explore-menu-list-items">
                <img src={item.img} alt={item.name} className="menu-list-img" />
                <p>{item.name}</p>
                </div>
            )
        })}
        
      </div>
      <hr className="menu-divider" />
      <h3 className="top-deals">Today's Top Deals</h3>
      <div className="menu-grid">
        {foodItems1.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3 className="menu-title">{item.name}</h3>
            <p className="menu-price">₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {foodItems2.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3 className="menu-title">{item.name}</h3>
            <p className="menu-price">₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {foodItems3.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3 className="menu-title">{item.name}</h3>
            <p className="menu-price">₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {foodItems4.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3 className="menu-title">{item.name}</h3>
            <p className="menu-price">₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {foodItems5.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} className="menu-img" />
            <h3 className="menu-title">{item.name}</h3>
            <p className="menu-price">₹{item.price}</p>
            <button className="menu-button" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
