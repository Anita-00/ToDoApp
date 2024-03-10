import Card from "react-bootstrap/Card";
import React from 'react';
import { useState } from 'react';
import TaskItem from "./TaskItem";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

function EmptyTask ({ showEmptyRow, setShowEmptyRow, isAddClicked, setIsAddClicked }) {
      // Creates an empty row for adding a new task
      // Users can add or reject the new task

      const [checked, setChecked] = useState(false);
      const [taskPriority, setTaskPriority] = useState('low');
      
      function handleChange(e) {
            setChecked(e.target.checked);
            console.log(checked);
      }

      const handlePriorityChange = (event) => {
            setTaskPriority(event.target.value);
      };

      const handleAddNewTask = () => {
            // Adds the row to the database because confirm button was clicked
            setShowEmptyRow(false);
            setIsAddClicked(false);
      }

      const handleDeleteNewTask = () => {
            // Removes the row to add a new tasks because delete button was clicked
            setShowEmptyRow(false);
            setIsAddClicked(false);
      }

      const emptyRow = (props) => {
            // Create the empty task row
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
                        <FontAwesomeIcon icon={faCheck} className="mx-2" style={{color: 'green'}} onClick={handleAddNewTask}/>
                        <FontAwesomeIcon icon={faTimes} className="mx-2" style={{color: 'red'}} onClick={handleDeleteNewTask}/>
                  </td>
            </tr>
            )
      }

      return (
            showEmptyRow && (emptyRow({buttonId: 5, tasks: "test", priority: "low"}))
      );
}

export default EmptyTask;

