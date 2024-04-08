import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './register';
import Homepage from './Homepage';
import ProductPage from './ProductPage';
import Guitars from './guitars';
import Pianos from './pianos';
import Tutorials from './tutorials';
import Sheets from './sheets';
import Contact from "./contact";
import About from "./about";
import ShoppingCart from "./shoppingcart";
import Shops from "./Shops";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('merge');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} /> {}
          <Route path="/register" element={<Register />} /> {}
          <Route path="/homepage" element={<Homepage />} />
          {}
          {isLoggedIn ? (
            <Route path="/homepage" element={<Homepage />} /> // aici adaugi paginile care pot fi accesate doar dupa login
          ) : (
            <Route path="/homepage" element={<Login onLogin={handleLogin} />} />
          )}
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/guitars" element={<Guitars />} />
          <Route path="/pianos" element={<Pianos />} />
           <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/Shops" element={<Shops />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
