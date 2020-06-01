import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

interface _LoginModal {
    visible: boolean,
    showOff: () => void
}

const LoginModal = ({ visible, showOff }: _LoginModal) => {

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const testChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(id + ", " + value);
    }

    const submitLoginInfo = (id: string, pw: string) => {


        showOff();
    }

    return (
        <Modal show={visible}>
            <Modal.Header closeButton onClick={showOff}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control id="identity" placeholder="ID" onChange={testChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="password" placeholder="PASSWORD" onChange={testChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={showOff}>Close</Button>
                <Button variant="primary" onClick={() => { submitLoginInfo("ididid", "pwpwpw") }}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;