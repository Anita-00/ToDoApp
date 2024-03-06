import Card from "react-bootstrap/Card";
import React from 'react';
import { useState } from 'react';
import TaskItem from "./TaskItem";
import Container from "react-bootstrap/esm/Container";

function TaskCard() {
    // Creates the whole card for tasks
    // Each tasks includes priority, completion status, and actions

    const [checked, setChecked] = useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
        console.log(checked);
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
            <tbody>
            <tr class="fw-normal">
                <th>
                <span class="ms-2">Alice Mayer</span>
                </th>
                <td class="align-middle">
                <span>Call Sam For paymentsaa</span> 
                </td>
                <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
                </td>
                <td class="align-middle">
                <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                    class="fas fa-check fa-lg text-success me-3"></i></a>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                    class="fas fa-trash-alt fa-lg text-warning"></i></a>
                </td>
            </tr>
            <tr class="fw-normal">
                <th>

                <span class="ms-2">Kate Moss</span>
                </th>
                <td class="align-middle">Make payment to Bluedart</td>
                <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-success">Low priority</span></h6>
                </td>
                <td class="align-middle">
                <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                    class="fas fa-check fa-lg text-success me-3"></i></a>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                    class="fas fa-trash-alt fa-lg text-warning"></i></a>
                </td>
            </tr>
            <tr class="fw-normal">
                <th>
                <span class="ms-2">Danny McChain</span>
                </th>
                <td class="align-middle">Office rent</td>
                <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-warning">Middle priority</span></h6>
                </td>
                <td class="align-middle">
                <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                    class="fas fa-check fa-lg text-success me-3"></i></a>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                    class="fas fa-trash-alt fa-lg text-warning"></i></a>
                </td>
            </tr>
            <tr class="fw-normal">
                <th>
                <span class="ms-2">Alexa Chung</span>
                </th>
                <td class="align-middle">Office grocery shopping</td>
                <td class="align-middle">
                <h6 class="mb-0"><span class="badge bg-danger">High priority</span></h6>
                </td>
                <td class="align-middle">
                <a href="#!" data-mdb-toggle="tooltip" title="Done"><i
                    class="fas fa-check fa-lg text-success me-3"></i></a>
                <a href="#!" data-mdb-toggle="tooltip" title="Remove"><i
                    class="fas fa-trash-alt fa-lg text-warning"></i></a>
                </td>
            </tr>
            </tbody>
            </table>
            < TaskItem />
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