import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import TaskCard from "./TaskCard";

function Tabs() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleSave = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const [priority, setPriority] = useState('low');

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    const [showEmptyRow, setShowEmptyRow] = useState(false);

    const handleAddTask = () => {
        setIsAddClicked(true);
        setShowEmptyRow(true);
    };

    return (
        <div className="mx-2">
            <Row>
                <Col md={4}>
                    <Nav variant="tabs" defaultActiveKey="/home" style={styles.tabsLayout}>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} eventKey="link-1">Completed</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} eventKey="link-2">Upcoming</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={8} className="d-flex justify-content-end my-1">
                <Button variant="primary" onClick={handleAddTask} disabled={isAddClicked}>
                    Add Task
                </Button>
                </Col>
                <TaskCard showEmptyRow={showEmptyRow} setShowEmptyRow={setShowEmptyRow} isAddClicked={isAddClicked} setIsAddClicked={setIsAddClicked} />
            </Row>
        </div>
    );
}

const styles = {
    tabsLayout: {
        margin: '0%',
        marginTop: '2%',
    },
    tabsText: {
        color: "black",
    }
}

export default Tabs;
