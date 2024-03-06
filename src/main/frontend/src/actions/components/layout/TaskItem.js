import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import { useState } from 'react';

function TaskItem() {
    // Creates one task item with a checkbox, task name, priority, and actions

    const [checked, setChecked] = useState(false);
    function handleChange(e) {
        setChecked(e.target.checked);
        console.log(checked);
    }

    return (
        <table>
            <tbody>
            <tr class="fw-normal">
                <td class="align-middle">
                    <input value = "test" type = "checkbox" onChange = {handleChange} />
                </td>
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
                <td class="align-middle">
                    <FontAwesomeIcon icon={faPencilAlt} />
                    <FontAwesomeIcon icon={faTrash} />
                </td>
            </tr>
            </tbody>
        </table>
     
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