import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import { useState } from 'react';

const tasks = [
    { buttonId: 1, tasks: "Call Sam For payments", priority: 'High' },
    { buttonId: 2, tasks: "Make payment to Bluedart", priority: 'Low' },
    { buttonId: 3, tasks: "Office rent", priority: 'Medium' },
    { buttonId: 4, tasks: "Office grocery shopping", priority: 'High' }
]

function TaskItem({task}) {
    // Creates one task item with a checkbox, task name, priority, and actions

    const [checked, setChecked] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);

    function handleChange(e) {
        setChecked(e.target.checked);
        console.log(checked);
    }

    const TaskRow = (props) => {
        const { buttonId , tasks, priority } = props;
        const handleEditTask = () => {
            // Allows users to edit task name and priority
            console.log('Edit task');
        }
        const handleDeleteTask = () => {
            // Removes the row when delete button is clicked
            console.log('Delete task');
            setDeleteTask(true);
        }

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
                    <FontAwesomeIcon icon={faPencilAlt} className="mx-2" onClick={handleEditTask}/>
                    <FontAwesomeIcon icon={faTrash} className="mx-2" onClick={handleDeleteTask}/>
                </td>
            </tr>
        )
    }

    return (
        !deleteTask && TaskRow(task)  
    );
}

const styles = {
    ToDoCard: {
        height: '100%',
        margin: '1%', // matches the margin of the tabs style in tabsLayout
        marginTop: '0%',
        borderRadius: '0px 0px 0.375rem 0.375rem',

    }
}

export default TaskItem;