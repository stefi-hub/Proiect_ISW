import React, { useState, useRef } from 'react';
import './shoppingcart.css'; 
import logoIcon from "./img/p1.jpg";
import { PRODUCTS } from './ProductsPage'; // Import the function to get products

const Cart = () => {
  // Get products from ProductsPage
  const [cartItems, setCartItems] = useState(PRODUCTS);

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  }

  // Function to handle quantity change
  const handleQuantityChange = (id, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // State for free shipping
  const [freeShipping, setFreeShipping] = useState(false);

  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Ref for the products row
  const productsRowRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (productsRowRef.current) {
      const newPosition = scrollPosition - 200; // Adjust the scroll amount as needed
      productsRowRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }

  // Function to scroll right
  const scrollRight = () => {
    if (productsRowRef.current) {
      const newPosition = scrollPosition + 200; // Adjust the scroll amount as needed
      productsRowRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  }

  // Function to handle checkout
  const handleCheckout = () => {
    setCartItems([]);
    alert("Order has been shipped");
  }

  return (
    <div className="shoppage">
      <div className="shop_background"></div>
      <div className="content-center1">
        <div className="logo-section">
          <img src={logoIcon} alt="Logo" className="logo"/>
        </div>
        <div className="welcome-message">
          Hello, username!
        </div>
      </div>

      <div className="topbar1">
        <ul className="top-links">
          <li><a href="/homepage" style={{color: 'white'}}>Home 🏠︎ </a></li>
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
          <p>Shipping Terms: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="also-bought">
        <h2>People have also bought</h2>
        <div className="products-wrapper">
          <button className="scroll-left" onClick={scrollLeft}>&#10094;</button>
          <div className="products-row" ref={productsRowRef}>
            {PRODUCTS.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price}</div>
                </div>
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