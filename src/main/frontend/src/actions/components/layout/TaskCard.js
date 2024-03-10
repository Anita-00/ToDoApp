import Card from "react-bootstrap/Card";
import React from 'react';
import { useState } from 'react';
import TaskItem from "./TaskItem";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const tasks = [
    { buttonId: 1, tasks: "Call Sam For payments", priority: 'High' },
    { buttonId: 2, tasks: "Make payment to Bluedart", priority: 'Low' },
    { buttonId: 3, tasks: "Office rent", priority: 'Medium' },
    { buttonId: 4, tasks: "Office grocery shopping", priority: 'High' }
]

function TaskCard({ showEmptyRow, setShowEmptyRow }) {
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
    const [rows, setRows] = useState(tasks);
    const Row = (props) => {
        const { buttonId , tasks, priority } = props;
        return (
            <tr>
                <td class="align-middle" style={{paddingLeft:"3%"}}>
                    <input id={buttonId} value = "test" type = "checkbox" onChange = {handleChange} />
                </td>
                <td class="align-middle" >
                    <span className="mx-2">{tasks}</span> 
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

    const emptyRow = (props) => {
        const { buttonId , tasks, priority } = props;
        return (
            <tr key="empty-row">
                <td class="align-middle" style={{paddingLeft:"3%"}}>
                    <input id={buttonId} value = "test" type = "checkbox" onChange = {handleChange} />
                </td>
                <td class="align-middle">
                    <Col sm="8">
                        <Form.Control type="text" placeholder="Enter task name"/>
                    </Col>
                </td>
                <td class="align-middle">
                    <Form.Group controlId="taskPriority">
                            <Col sm="8">
                                <Form.Select onChange={handlePriorityChange} value={taskPriority}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </Form.Select>
                            </Col>
                    </Form.Group>
                </td>
                <td class="align-middle">
                    <FontAwesomeIcon icon={faCheck} className="mx-2" style={{color: 'green'}}/>
                    <FontAwesomeIcon icon={faTimes} className="mx-2" style={{color: 'red'}}/>
                </td>
            </tr>
        )
    }

    const Table = (props) => {
        const {data} = props;
        return (
            <tbody>
                {data.map((row, i) => <Row key={i} {...row} />)}
                {/* TO DO - remove hardcoding of adding a task */}
                {showEmptyRow && emptyRow({buttonId: 5, tasks: "test", priority: "low"})}
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
                <Table data={rows} />
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