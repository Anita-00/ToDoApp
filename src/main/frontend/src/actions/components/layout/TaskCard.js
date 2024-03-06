import Card from "react-bootstrap/Card";
import React from 'react';
import { useState } from 'react';
import TaskItem from "./TaskItem";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/fontawesome-free-solid';

const tasks = [
    { buttonId: 1, tasks: "Call Sam For payments", priority: 'High' },
    { buttonId: 2, tasks: "Make payment to Bluedart", priority: 'Low' },
    { buttonId: 3, tasks: "Office rent", priority: 'Medium' },
    { buttonId: 4, tasks: "Office grocery shopping", priority: 'High' }
]

function TaskCard() {
    // Creates the whole table for tasks
    // Each tasks includes priority, completion status, and actions

    const [checked, setChecked] = useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
        console.log(checked);
    }

    const [rows, setRows] = useState(tasks);
    const Row = (props) => {
        const { buttonId , tasks, priority } = props;
        return (
            <tr>
                <td class="align-middle" style={{paddingLeft:"3%"}}>
                    <input id={buttonId} value = "test" type = "checkbox" onChange = {handleChange} />
                </td>
                <td class="align-middle">
                    <span>{tasks}</span> 
                </td>
                <td class="align-middle">
                    <h6 class="mb-0"><span className={`badge ${priority === 'Low' ? 'bg-success' : priority === 'Medium' ? 'bg-warning' : 'bg-danger'}`}>{priority} Priority</span></h6>
                </td>
                <td class="align-middle">
                    <FontAwesomeIcon icon={faPencilAlt} className="mx-2"/>
                    <FontAwesomeIcon icon={faTrash} className="mx-2"/>
                </td>
            </tr>
        )
    }
    const Table = (props) => {
        const {data} = props;
        return (
            <tbody>
                {data.map((row, i) => <Row key={i} {...row} />)}
            </tbody>
        )
    }

    return (
        <Container className="mx-0">
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
                <Table data={rows} />
            </table>
            </Card>
        </Container>
        
    );
}

const styles = {
    ToDoCard: {
        height: '100%',
        marginTop: '0%',
        borderRadius: '0px 0px 0.375rem 0.375rem',
    }
}

export default TaskCard;