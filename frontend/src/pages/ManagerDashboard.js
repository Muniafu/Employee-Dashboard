
import React, { useEffect, useState } from "react";
import axios from "axios";

const ManagerDashboard = ({ match }) => {
    const [ employees, setEmployees ] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const { data } = await axios.get(`/api/managers/${match.params.id}/employees`);
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching employees data:", error);
            }
        };

        fetchEmployees();
    }, [match.params.id]);

    if (employees.length === 0) return
    <div> Loading...</div>;

    return (
        <div className="container">
            <h1> Manager Dashboard </h1>
            <h3> managed Employees</h3>
            {employees.map((employee) => (
                <div key={employee.id} className="card mt-3">
                    <div className="card-body">
                        <h4>{employee.name}</h4>
                        <div>
                            <strong>Performance Goals:</strong>
                            <ul>
                                {employee.goals.map((goal, index) => (
                                    <li key={index}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <strong>Evaluation Scores:</strong>
                            <p>{employee.evaluationScores}</p>
                        </div>
                        <div>
                            <strong>Feedback:</strong>
                            <ul>
                                {employee.feedback.map((feedback, index) => (
                                    <li key={index}>{feedback}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManagerDashboard;