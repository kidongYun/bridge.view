import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

interface RemoveObjModalProps {
    visible: boolean,
    showOff: () => void
}

const RemoveObjModal = ({ visible, showOff }: RemoveObjModalProps) => {
    return(
        <Modal show={visible}>
            <Modal.Header closeButton onClick={showOff}>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={showOff}>Close</Button>
                <Button variant="primary" onClick={() => {}}>Login</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RemoveObjModal;