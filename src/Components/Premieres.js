import "../App.css"
import Carousel from "react-bootstrap/Carousel"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
function Premieres() {
    return (
        <div style={{ marginBottom: "5%", background: "rgb(43,49,72)", padding: "2%" }}>
            <h2 style={{ color: "white" }}>Premieres</h2>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "20px" }}>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img4.jpg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>toy Story 4</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img5.jpg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>Frozen</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img6.jpg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>The Scooby Doo</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "20px" }}>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img7.jpg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>Tomorrow War</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img8.jpeg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>Locke and Key</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ borderRadius: "10px" }}>
                            <Card.Img variant="top" src="./Img9.jpg" style={{ height: "400px", borderRadius: "10px" }} />
                            <Card.Body>
                                <Card.Title>The Conjuring</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}


export default Premieres;