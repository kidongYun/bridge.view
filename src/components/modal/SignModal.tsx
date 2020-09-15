import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import useModal from '../../hooks/useModal';

import { ButtonProps } from '../props';

interface SignModalProps {
    buttons: ButtonProps[]
}

const SignModal = ({ buttons }: SignModalProps) => {
    const { onHideModal } = useModal();

    let signReq = {
        email: "",
        password: ""
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if(id === 'email') {
            signReq.email = value;
        }

        if(id === 'password') {
            signReq.password = value;
        }
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton onClick={onHideModal}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Control id="email" placeholder="EMAIL" onChange={onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control id="password" placeholder="PASSWORD" onChange={onChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                {buttons.map((button) => {
                    return <Button variant={button.type} onClick={() => { button.onClick(signReq); }}>{button.text}</Button>
                })}
            </Modal.Footer>
        </Modal>
    )
}

export default SignModal;