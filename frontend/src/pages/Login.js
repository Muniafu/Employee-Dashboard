import React, { useState } from 'react';
import axios from 'axios';
import authService from '../services/authService';
import {useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', {email, password});
            await authService.login( email, password);
            localStorage.setItem('token', res.data.token);
            history.push('/dashboard'); // Redirect to dashboard after login
        } catch (err) {
            setError('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2> Login </h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label> Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label> Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary"> Login </button>
            </form>
        </div>
    );
};

export default Login;