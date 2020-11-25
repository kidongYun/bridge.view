import React from 'react'
import { ComponentProps } from './Component'
import Modal from 'react-bootstrap/Modal'
import useTemplate from '../../data/hooks/useTemplate'

interface DialogProps {
    component?: ComponentProps;
}

const DialogComponent: React.FC<DialogProps> = (props) => {
    const { getTemplate } = useTemplate();

    let view = 
    <Modal show={getTemplate.dialog}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default DialogComponent;