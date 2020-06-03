import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface AddObjModalProps {
    visible: boolean,
    addClick: (id: number, title: string, description: string, priority: number, deadline: string) => void,
    closeClick: () => void
}

const AddObjModal = ({visible, addClick, closeClick}: AddObjModalProps) => {


    return (
        <Modal show={visible}>
            <Modal.Header closeButton onClick={closeClick}>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeClick}>Close</Button>
                <Button variant="primary" onClick={() => addClick(1, '2', '3', 4, '5')}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddObjModal;