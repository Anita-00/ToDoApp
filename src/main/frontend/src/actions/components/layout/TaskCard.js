import Card from "react-bootstrap/Card";
import Tabs from "./Tabs";

function Card() {
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

export default Card;