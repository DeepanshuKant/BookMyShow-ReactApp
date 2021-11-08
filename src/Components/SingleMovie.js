import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import data from './movies.json'
import { useParams } from 'react-router';

function SingleMovie() {
    let { movid } = useParams();
    movid = Number(movid);
    return (

        <div>
            <Container fluid style={{ padding: "8%", background: "pink" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) => {
                        if (mov.id == movid) {
                            return (<Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                <Card style={{ borderRadius: "10px" }}>
                                    <Card.Img variant="top" src={mov.image} style={{ height: "300px", borderRadius: "10px" }} />
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>
                                            {mov.actor}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    }
                    )}

                </Row>
            </Container>
        </div>
    );
}

export default SingleMovie;