import React, { useEffect, useState } from "react";

const Goals = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        // Mock data fetching
        setGoals([
            { id: 1, title: 'Complete project X', status: 'In Progress'},
            { id: 2, title: 'Attend training Y', status: 'Completed'},
        ]);
    }, []);

    return (
        <div className="goals">
            <h2> Performance Goals </h2>
            <ul>
                {goals.map(goal => (
                    <li key={goal.id}>{goal.title} - {goal.status}</li>
                ))}
            </ul>
            {/* Goals content here*/}
        </div>
    );
};

export default Goals;