import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(''); // Initialize isAdmin state

  const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:8888/users/', {
      username,
      password,
      is_admin: isAdmin ? 1 : 0, // Convert boolean to integer for backend compatibility
    });
    setMessage('User registered successfully!');
    setUsername('');
    setPassword('');
    setIsAdmin(false); // Reset isAdmin state after successful registration
  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.detail || 'An unexpected error occurred.');
    } else {
      setMessage('An unexpected error occurred.');
    }
  }
};


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            Admin:
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
