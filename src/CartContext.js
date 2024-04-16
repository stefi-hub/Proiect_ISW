import React, { createContext, useContext, useState } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Define CartProvider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // const removeFromCart = (id) => {
    //     setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    // };
    const handleQuantityChange = (id, quantity) => {
        const updatedCartItems = cartItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
        setCartItems(updatedCartItems);
      }
      const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
      }
      const handleCheckout = () => {
        setCartItems([]);
        alert("Order has been shipped");
      }
    // Expose cartItems, addToCart, and removeFromCart to children components
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, handleQuantityChange, removeFromCart, handleCheckout }}>
            {children}
        </CartContext.Provider>
    );
};
