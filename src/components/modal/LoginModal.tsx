import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useNoti from '../../hooks/useNoti';
import useModal from '../../hooks/useModal';

const LoginModal = () => {
    const { onShowNoti, onHideNoti } = useNoti();
    const { onHideModal } = useModal();

    const onExecute = () => {
        onShowNoti("success", "It's from Login Modal");
        setTimeout(onHideNoti, 2300);
        onHideModal();
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        console.log(id + ", " + value);
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton onClick={onHideModal}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control id="identity" placeholder="ID" onChange={onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="password" placeholder="PASSWORD" onChange={onChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onHideModal}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;