import React from 'react'
import Modal from 'react-bootstrap/Modal'

interface DialogProps {
    display: boolean
}

const DialogComponent: React.FC<DialogProps> = (props) => {

    let view = 
    <Modal show={props.display}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default DialogComponent;