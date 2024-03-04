import Nav from "react-bootstrap/Nav";

function Tabs() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Completed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Upcoming</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Tabs;