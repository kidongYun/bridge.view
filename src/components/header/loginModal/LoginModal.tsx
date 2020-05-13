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

    const testChange = (event: React.FormEvent<FormControlElement>) => {
        console.log(id);
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
                        <Form.Control type="text" value={id} onChange={testChange} placeholder="ID"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" id="pw" placeholder="Password"></Form.Control>
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