import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

interface _LoginModal {
    visible: boolean,
    closeClick: () => void
    loginClick: (id :string, pw :string) => void
}

const LoginModal = ({ visible, closeClick, loginClick }: _LoginModal) => {

    return (
        <Modal show={visible}>
            <Modal.Header closeButton onClick={closeClick}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="ID"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Password"></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeClick}>Close</Button>
                <Button variant="primary">Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;