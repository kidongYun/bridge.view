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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
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
                {buttons.map((button) => {
                    return <Button variant={button.type} onClick={button.onClick}>{button.text}</Button>
                })}
            </Modal.Footer>
        </Modal>
    )
}

export default SignModal;