import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Employee Management System</h1>
            <p>Welcome!!</p>

            <div className="home-links">
                <Link to="/login" className="btn btn-primary">login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>
        </div>
    );
};

export default Home;