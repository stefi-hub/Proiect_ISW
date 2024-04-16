import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Username and password are required.'); // Display pop-up message
      return;
    }
    try {
      await axios.post('http://localhost:8888/users/', {
        username,
        password,
        is_admin: isAdmin ? 1 : 0,
      });
      setMessage('User registered successfully!');
      setUsername('');
      setPassword('');
      setIsAdmin(false);
      navigate('/');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.detail || 'An unexpected error occurred.');
      } else {
        setMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="register-page-container">
      <div className="background-image"></div>
      <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="register-section">
            <label>
              Admin:
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {message && <p className="error-message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
