import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface RemoveObjModalProps {
    isShow: boolean
    cellId: number
    onClose: () => void
}

const RemoveObjModal = ({ isShow, cellId, onClose }: RemoveObjModalProps) => {

    console.log(cellId);

    const onExecute = () => {
        onClose()
    }
    return(
        <Modal show={isShow}>
            <Modal.Header closeButton onClick={onClose}>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Do you want to remove this surely?</Form.Label>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onExecute}>Remove</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveObjModal;