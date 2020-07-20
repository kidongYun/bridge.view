import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useModal from '../../../hooks/useModal';
import useNoti from '../../../hooks/useNoti';

const LoginModal = () => {

    const { onUpdateVisible } = useModal();
    const { onShow, onHide } = useNoti();

    const onExecute = () => {
        onUpdateVisible(false);

        onShow("success", "It's from Login Modal");
        setTimeout(onHide, 2300);
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                        <Form.Control id="identity" placeholder="ID" onChange={onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="password" placeholder="PASSWORD" onChange={onChange} />
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