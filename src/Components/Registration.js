import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function Registration() {
    const [username, setUsername] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");


    function clearInput() {

        setUsername("")
        setEmailAddress("")
        setPasswordd("")
    }
    async function userPost() {
        const userDetail = {
            "username": username,
            "email": emailaddress,
            "password": passwordd
        }
        // const response = await axios.post('http://localhost:4000/user-regist', userDetail)
        // console.log(response);

        await axios.post('http://localhost:4000/user-register', userDetail).then((data) => {
            Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true
            })

            clearInput();
        }).catch((err) => Swal.fire({
            title: `<strong>${err.message}</strong>`,
            icon: 'error',
            showCloseButton: true
        }));

    }

    return (
        <div>
            <Container style={{ padding: "8%" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me login" />
                    </Form.Group>
                    <Button variant="primary" onClick={userPost} >
                        Submit
                    </Button>
                </Form>
            </Container>

        </div>
    )
}

export default Registration;