import React, { useState, useRef } from 'react';
import './shoppingcart.css';
import logoIcon from "./img/p1.jpg";
import { PRODUCTS } from './ProductsPage';
import {Link} from "react-router-dom";

const Cart = ({ userName }) => {
  const [cartItems, setCartItems] = useState(PRODUCTS);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  const [freeShipping, setFreeShipping] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const productsRowRef = useRef(null);

  const scrollLeft = () => {
    if (productsRowRef.current) {
      const newPosition = scrollPosition - 200;
      productsRowRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }

  const scrollRight = () => {
    if (productsRowRef.current) {
      const newPosition = scrollPosition + 200;
      productsRowRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }

  const handleCheckout = () => {
    setCartItems([]);
    alert("Order has been shipped");
  }

  return (
      <div className="shoppage">
        <div className="shop_background"></div>
        <div className="content-center1">
          <div className="logo-section">
            <Link to="/homepage">
              <img src={logoIcon} alt="Logo" className="logo"/>
            </Link>
          </div>
          <div className="welcome-message">
            Hello, {userName}!
          </div>
        </div>

        <div className="topbar1">
          <ul className="top-links">
            <li><a href="/contact" style={{color: 'white'}}>Contact us ✉️</a></li>
            <li><a href="/about" style={{color: 'white'}}>About us 📄</a></li>
            <li><a href="/shops" style={{color: 'white'}}>Shops 📌</a></li>
            <li><a href="/shoppingcart" style={{color: 'white'}}>Shopping Cart 🛒</a></li>
            <li><a href="/" style={{color: 'white'}}>Logout ↪</a></li>
          </ul>
        </div>

        <div className="shopping-cart">
          <h2>Shopping Cart</h2>
          <div className="cart-items">
            {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      min="1"
                      max="100"
                  />
                  <span>${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="shipping-options">
            <input
                type="checkbox"
                id="freeShipping"
                checked={freeShipping}
                onChange={() => setFreeShipping(!freeShipping)}
            />
            <label htmlFor="freeShipping">Free Shipping</label>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          <div className="shipping-terms">
            <p>Shipping Terms: are defined according to the quantity.</p>
          </div>
        </div>

        <div className="also-bought">
          <h2>People have also bought</h2>
          <div className="products-wrapper">
            <button className="scroll-left" onClick={scrollLeft}>&#10094;</button>
            <div className="products-row" ref={productsRowRef}>
              {PRODUCTS.map(product => (
                  <div key={product.id} className="product-card">
                    <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} className="product-link">
                      <img src={product.image} alt={product.name}/>
                      <div className="product-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">${product.price}</div>
                      </div>
                    </Link>
                  </div>
              ))}
            </div>
            <button className="scroll-right" onClick={scrollRight}>&#10095;</button>
          </div>
        </div>

        <div className="points-of-interest1">
          <div className="point-column">
            <div className="point">Terms and conditions</div>
            <div className="point">Blog</div>
            <div className="point">Cookie settings</div>
          </div>
          <div className="point-column">
            <div className="point">Warranty form</div>
            <div className="point">Confidentiality policy</div>
            <div className="point">© 2023–2024 Music Instruments</div>
          </div>
        </div>
      </div>
  );
}

export default Cart;