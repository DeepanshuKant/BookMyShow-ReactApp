
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container className="main__container">
                    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="search__box">
                        <Nav className=" me-2" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="search__bar d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search for movies, Plays, Events,Sports and Activities"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
            <Container fluid style={{ background: "rgb(32, 32, 32)", color: "white" }}>
                <Row style={{ textAlign: "center" }}>
                    <Col xs={12} md={12} lg={6} style={{ padding: "0%" }}>
                        <a href="/movies" className="items__list">Movies</a>
                        <a className="items__list">Streams</a>
                        <a className="items__list">Events</a>
                        <a className="items__list">Plays</a>
                        <a className="items__list">Sports</a>
                        <a href="/registration" className="items__list">Registration</a>
                    </Col>
                    <Col xs={12} md={12} lg={6} style={{ padding: "0%" }}>
                        <a className="items__list">List your show</a>
                        <a className="items__list">Corporates</a>
                        <a className="items__list">Offers</a>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Header;