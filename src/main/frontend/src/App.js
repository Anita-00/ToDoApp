import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TaskCard from './actions/components/layout/TaskCard';
import Tabs from "./actions/components/layout/Tabs";
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <div className="App" class="ms-auto">
            <style>{'body { background-color:#BCB2E5; }'} </style>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <div id="ToDoHeader" style={styles.ToDoHeader}>
                <p className="ToDoHeader" style={styles.ToDoText}>To Do List</p>
                </div>
                <Container style={{margin:"0px"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"end"}}>
                    <Nav>
                        <Nav.Link href="#home">To Do List</Nav.Link>
                        <Nav.Link href="#link">Side Quests</Nav.Link>
                        <NavDropdown title="Other" id="basic-nav-dropdown" class="dropdown-menu-right">
                        <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Add Friends</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sign out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Tabs />
            <TaskCard />
        </div>
  );
}

export default App;

const styles = {
  ToDoText: {
    color: "white",
    fontSize: "1.5em",
    fontWeight: "medium",
    textAlign: "left",
    margin: "0px",
    marginLeft: "2%",
  },
  ToDoHeader: {
    justifyContent: "start",
    width: "50%",
  }
}