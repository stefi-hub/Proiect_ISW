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
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/sheets" element={<Sheets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
