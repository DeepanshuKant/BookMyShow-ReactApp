import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
// import data from './movies.json'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function SingleMovieMongo() {
    let { movid } = useParams();

    // movid = Number(movid);
    const [data, setData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`https://bms-backend-deepanshu.herokuapp.com/movies/${movid}`);
            console.log(response);
            setData([response.data]);
        } catch (error) {
            console.error(error);
        }

    }, []);
    return (

        <div>
            <Container fluid style={{ padding: "8%", background: "pink" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((mov) => {
                        return (
                            <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                <Card style={{ borderRadius: "10px" }}>
                                    <Card.Img variant="top" src={mov.imgurl} style={{ height: "300px", borderRadius: "10px" }} />
                                    <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>
                                            {mov.actor}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>
    );
}

export default SingleMovieMongo;