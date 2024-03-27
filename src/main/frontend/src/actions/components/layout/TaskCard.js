import Card from "react-bootstrap/Card";
import React from 'react';
import { useState } from 'react';
import TaskItem from "./TaskItem";
import EmptyTask from "./EmpyTask";

const tasks = [
    { buttonId: 1, tasks: "Call Sam For payments", priority: 'High' },
    { buttonId: 2, tasks: "Make payment to Bluedart", priority: 'Low' },
    { buttonId: 3, tasks: "Office rent", priority: 'Medium' },
    { buttonId: 4, tasks: "Office grocery shopping", priority: 'High' }
]

function TaskCard({ showEmptyRow, setShowEmptyRow, isAddClicked, setIsAddClicked }) {
    // Creates the whole table for tasks
    // Each tasks includes priority, completion status, and actions

    const [checked, setChecked] = useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
        console.log(checked);
    }
    const [taskPriority, setTaskPriority] = useState('low');

    const handlePriorityChange = (event) => {
        setTaskPriority(event.target.value);
    };

    const Table = (props) => {
        const {data} = props;
        return (
            <tbody>
                {data.map((row, i) => <TaskItem key={i} task={row} />)}
                {/* TO DO - remove hardcoding of adding a task */}
                {showEmptyRow && <EmptyTask showEmptyRow={showEmptyRow} setShowEmptyRow={setShowEmptyRow} isAddClicked={isAddClicked} setIsAddClicked={setIsAddClicked}/>}
            </tbody>
        )
    }

    return (
        <div className="mx-2">
            <Card style={styles.ToDoCard}>
            <table class="table text-white mb-0">
            <thead>
                <tr>
                    <th scope="col">Completed</th>
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
                <Table data={tasks} />
            </table>
            </Card>
        </div>
        
    );
}

const styles = {
    ToDoCard: {
        height: '100%',
        marginTop: '0%',
        borderRadius: '0px 0px 0.375rem 0.375rem',
    },
}

export default TaskCard;