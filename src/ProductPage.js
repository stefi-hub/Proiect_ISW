import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from './ProductsPage';
import { useCart } from './CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { productName } = useParams();  
  const product = PRODUCTS.find(p => p.name.toLowerCase() === productName.replace(/-/g, ' '));  
  const { addToCart } = useCart();

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
    console.log('Product added to cart:', product);
  };

  return (
    <div className="product-page-container">
      <div className="product-container">
        <Link to="/homepage">Inapoi</Link>
        <img src={product.image} alt={product.name} className="product-image" />
        <h1 className="product-name">{product.name}</h1>
        <div className="price-and-cart">
          <p className="product-price">{`Price: $${product.price}`}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart 🛒</button>
        </div>
        <p className="product-description">{product.description}</p>
        <div className={`cart-message ${showMessage ? 'show' : 'hide'}`}>Item added to your cart!</div>
      </div>
    </div>
  );
};

export default ProductPage;
