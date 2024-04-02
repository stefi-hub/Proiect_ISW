import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                username: username,
                password: password,
            });
            localStorage.setItem('token', response.data.access_token);
            onLogin(response.data.access_token);
            navigate('/homepage');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid username or password');
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };

    const onShowRegister = () => navigate('/register');

    return (
        <>
        <div className="login-page-container">
            <div className="background-image"></div>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <div className="register-section">
                        <span>You don't have an account?</span>
                        <button type="button" onClick={onShowRegister} className="register-button">Register</button>
                    </div>
                </form>
                {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
        </>
    );
};

export default Login;
