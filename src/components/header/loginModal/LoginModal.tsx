import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface _LoginModal {
    visible: boolean,
    closeClick: () => void
}

const LoginModal = ({visible, closeClick}: _LoginModal) => {

    return(
        <Modal show={visible}>
            <Modal.Header closeButton onClick={closeClick}>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={closeClick}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;