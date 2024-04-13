import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from './ProductsPage';
import './ProductPage.css';

const ProductPage = () => {
  const { productName } = useParams();
  const product = PRODUCTS.find(p => p.name.toLowerCase() === productName.replace(/-/g, ' '));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page-container">
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <h1 className="product-name">{product.name}</h1>
        <div className="price-and-cart">
          <p className="product-price">{`Price: $${product.price}`}</p>
          <button className="add-to-cart-btn">Add to Cart 🛒</button>
        </div>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;