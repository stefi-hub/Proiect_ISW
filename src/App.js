import React, { useState, useEffect } from 'react';
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

const Layout = ({ children, isLoggedIn, userName }) => {
  return (
    <div className="App">
      {children}
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUserName(username);
    localStorage.setItem('userName', username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('userName');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Login onLogin={handleLogin} />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/homepage"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Homepage userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/product/:productName"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/guitars"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Guitars userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/pianos"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Pianos userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Contact userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <About userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/tutorials"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Tutorials userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <ShoppingCart userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/sheets"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Sheets userName={userName} />
            </Layout>
          }
        />
        <Route
          path="/Shops"
          element={
            <Layout isLoggedIn={isLoggedIn} userName={userName}>
              <Shops userName={userName} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;