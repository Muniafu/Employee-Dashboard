import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/employee/:id" pages={EmployeeDashboard} />
          <Route path="/manager/:id" pages={ManagerDashboard} />
          <Route path="/dashboard" Component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;