import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

interface RemoveObjModalProps {
    visible: boolean,
    removeClick: () => void,
    closeClick: () => void
}

const RemoveObjModal = ({ visible, removeClick, closeClick }: RemoveObjModalProps) => {
    return(
        <Modal show={visible}>
            <Modal.Header closeButton onClick={closeClick}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeClick}>Close</Button>
                <Button variant="primary" onClick={removeClick}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveObjModal;