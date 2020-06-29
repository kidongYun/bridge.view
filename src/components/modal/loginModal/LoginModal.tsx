import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import ModalType from '../../../model/ModalType';

interface LoginModalProps {
    modal: ModalType
    onClose: () => void
}

const LoginModal = ({ modal, onClose }: LoginModalProps) => {

    const onExecute = () => {
        // Do Something.
        onClose();
    }

    const testChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(id + ", " + value);
    }

    return (
        <Modal show={modal.isShow}>
            <Modal.Header closeButton onClick={onClose}>
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
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;