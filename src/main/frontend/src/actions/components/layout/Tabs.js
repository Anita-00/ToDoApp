import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tabs() {
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
                    <Button variant="primary">Add Task</Button>
                </Col>
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
