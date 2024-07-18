import axios from 'axios';

const API_URL = '/api/auth';

const register = async (name, email, password, role) => {
    try {
        const response = await axios.post(API_URL + '/register', {
            name,
            email,
            password,
            role
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg || 'Error registering user');
    }
};

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL + '/login', {
            email,
            password
        });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.msg || 'Error logging in');
    }
};

const logout = () => {
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    return localStorage.getItem('token');
};

export default { register, login, logout, getCurrentUser };