import Card from "react-bootstrap/Card";
import React from 'react';
import { useState, useEffect } from 'react';
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
    const [allTasks, setAllTasks] = useState(null);

    function getTasks() {
        // Get previously created and active tasks from the database
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8080/api/tasks', true); // calls API from Spring Boot
        xhr.onload = () => {
            console.log(xhr.status);
            if (xhr.status === 200) {
                setAllTasks(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    }

    useEffect(() => {
        // Load tasks from database when the page loads
        console.log('get tasks called');
        getTasks();
        console.log('get tasks finished');
        console.log(allTasks);
    }, []);

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
            {allTasks ? <div>{JSON.stringify(allTasks)}</div> : <div>Loading...</div>}
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