import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin, onShowRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                username,
                password
            });
            onLogin(response.data.access_token);
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">

            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="login-button">Login</button>
                <div className="register-section">
                    <span>You don't have an account?</span>
                    <button onClick={onShowRegister} className="register-button">Register</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
