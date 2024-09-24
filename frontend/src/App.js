import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Dashboard';
import Login from './pages/Login';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import { Register } from './pages/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/employee/:id" element={<EmployeeDashboard />} />
          <Route path="/manager/:id" element={<ManagerDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
};

export default App;