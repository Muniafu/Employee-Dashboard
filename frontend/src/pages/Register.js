import React, { useState } from 'react';
import axios from 'axios';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', {name, email, password, role});
            await authService.register( name, email, password, role);
            history.push('/login'); // Redirect to login after successful registration
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <h2> Register </h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label> Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <div className="form-group">
                    <label> Role: </label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary"> Register</button>
            </form>
        </div>
    );
};

export default Register;