import React, { useState } from 'react';
import Login from './Login';
import Register from './register';
import Homepage from './Homepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  if (isLoggedIn) {
    return <Homepage logout={handleLogout} />;
  }

  return (
      <div className="App">
        <div className="background-image"></div>
        {!showRegister ? (
            <Login onLogin={handleLoginSuccess} onShowRegister={toggleRegister}/>
        ) : (
            <Register onShowLogin={toggleRegister}/>
        )}
      </div>
  );
}

export default App;
