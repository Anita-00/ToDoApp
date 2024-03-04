import Card from "react-bootstrap/Card";

function TaskCard() {
    return (
        <Card style={styles.ToDoCard}>
            <Card.Body>Changing up the text.....</Card.Body>
        </Card>
    );
}

const styles = {
    ToDoCard: {
        height: '150px',

    }
}

export default TaskCard;