import "../App.css"

import Carousel from "react-bootstrap/Carousel"
function SliderImages() {
    return (
        <div>
            <Carousel fade variant="light">
                <Carousel.Item>
                    <img className="d-block Img__Sizing" src="./Img1.jpg" alt="First slide" />
                    <Carousel.Caption>
                        {/* <h3 className="text-white">Avengers Eng Game</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block Img__Sizing"
                        src="./Img2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block Img__Sizing"
                        src="./Img3.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default SliderImages;