// import React, {useState} from "react";
//
import Task from "../../components/task/Task.tsx";
import Header from "../../components/header/Header.tsx";

const TaskPage: React.FC = () => {

    return (
        <div className="container">
            <Header/>
            <Task />
        </div>
    );
};

export default TaskPage;
