import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './register';
import Homepage from './homepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
    console.log('merge');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} /> {/* Render Login component when path is / */}
          <Route path="/register" element={<Register />} /> {/* Render Register component when path is /register */}
          <Route path="/homepage" element={<Homepage />} /> {/* Always render Homepage component */}
          {/* Conditional rendering based on isLoggedIn state */}
          {isLoggedIn ? (
            <Route path="/homepage" element={<Homepage />} />
          ) : (
            <Route path="/homepage" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
