import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Tabs() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleSave = () => setShow(false);
    const handleShow = () => setShow(true);

    const [priority, setPriority] = useState('low');

    const handlePriorityChange = (event) => {
        setPriority(event.target.value);
    };

    return (
        <Container className="mx-0">
            <Row>
                <Col md={4}>
                    <Nav variant="tabs" defaultActiveKey="/home" style={styles.tabsLayout}>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} href="/home">Completed</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} eventKey="link-1">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.tabsText} eventKey="link-2">Upcoming</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={8} className="d-flex justify-content-end my-1">
                <Button variant="primary" onClick={handleShow}>
                    Add Task
                </Button>
                </Col>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="taskName">
                            <Form.Label column sm="2">
                                Task
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Enter task name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="priority">
                            <Form.Label column sm="2"> 
                                Priority 
                            </Form.Label>
                            <Col sm="10">
                                <Form.Select onChange={handlePriorityChange} value={priority}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>
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
