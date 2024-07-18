import React from "react";
import Goals from "./Goals";
import Progress from "./Progress";
import EvaluationScores from "./EvaluationScores";
import Feedback from "./Feedback";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1> Employee Dashboard </h1>
            <Goals />
            <Progress />
            <EvaluationScores />
            <Feedback />
        </div>
    );
};

export default Dashboard;