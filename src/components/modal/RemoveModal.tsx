import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import useModal from '../../hooks/useModal';

import { ButtonProps } from '../props';

interface RemoveModalProps {
    buttons: ButtonProps[]
}

const RemoveModal = ({ buttons }: RemoveModalProps) => {
    const { onHideModal } = useModal();

    return(
        <Modal show={true}>
            <Modal.Header closeButton onClick={onHideModal}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                {buttons.map((button) => {
                    return <Button variant={button.type} onClick={button.onClick}>{button.text}</Button>
                })}
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveModal;