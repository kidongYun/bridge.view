import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export interface _Popup {
    show: boolean,
    closeClick: () => void
}

const Popup = ({show, closeClick}: _Popup) => {

    return(
        <Modal show={show}>
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

export default Popup;