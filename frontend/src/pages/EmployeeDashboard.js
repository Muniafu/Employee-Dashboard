/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeDashboard = ({ match }) => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        const fetchEmployee = async () => {
            const { data } = await axios.get(`/api/employees/${match.params.id}`);
            setEmployee(res.data);
        }

        fetchEmployee();
    }, [match.params.id]);

    if (!employee) return <div> Loading...</div>;
    
    return (
        <div className="container">
            <h1>Employee, {employee.name}</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> Performance Goals </h5>
                    <ul>
                        {employee.goals.map(goal, index => (
                            <li key={index}>{goal}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title"> Evaluation Scores </h5>
                    <p>{employee.evaluationScores}</p>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title"> Feedback </h5>
                    <ul>
                        {employee.feedback.map(feedback, index => (
                            <li key={index}>{feedback}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;