import "../App.css"
import Carousel from "react-bootstrap/Carousel"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
function CardsSlider() {
    return (
        <div style={{ marginBottom: "5%", background: "rgb(43,49,72)", padding: "2%", marginTop: "2%" }}>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "40px" }}>
                        <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                            <Card.Img src="./Img1.jpg" alt="Card image" style={{ height: "300px", width: "100%" }} />
                            <Card.ImgOverlay>
                                <Card.Title >Avengers End Game</Card.Title>
                                <Card.Text>
                                    Avengers End Game is a sequel of its previous part and in this Avengers will fight against Thanos and it's army.
                                </Card.Text>
                                {/* <Card.Text>Last updated 1 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-dark text-white" style={{ width: "300px", height: "300px" }}>
                            <Card.Img src="./Img2.jpg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title>Squid Games</Card.Title>
                                <Card.Text>
                                    Squid Games about....
                                </Card.Text>
                                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                            <Card.Img src="./Img3.jpeg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title>The Vampire Diaries</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup style={{ display: "flex", gap: "40px" }}>
                        <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                            <Card.Img src="./Img4.jpg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title>Toy Story 4</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                            <Card.Img src="./Img5.jpg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title>Frozen</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="bg-dark text-white" style={{ height: "300px", width: "300px" }}>
                            <Card.Img src="./Img6.jpg" alt="Card image" style={{ width: "100%", height: "300px" }} />
                            <Card.ImgOverlay>
                                <Card.Title>Scooby Doo</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                            </Card.ImgOverlay>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}


export default CardsSlider;