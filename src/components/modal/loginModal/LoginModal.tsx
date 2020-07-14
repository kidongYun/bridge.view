import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useModal from '../../../hooks/useModal';

const LoginModal = () => {

    const { onUpdateVisible } = useModal();

    const onExecute = () => {
        // Do Something.
        onUpdateVisible(false);
        // showNoti(new NotiType("danger", "TEST"))
    }

    const testChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(id + ", " + value);
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton onClick={() => onUpdateVisible(false)}>
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
                <Button variant="secondary" onClick={() => onUpdateVisible(false)}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;