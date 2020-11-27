import React from 'react'
import { ComponentProps } from './Component'
import Modal from 'react-bootstrap/Modal'
import { truncate } from 'fs'

interface DialogProps {
    component?: ComponentProps;
}

const DialogComponent: React.FC<DialogProps> = (props) => {

    let view = 
    <Modal show={true}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default DialogComponent;