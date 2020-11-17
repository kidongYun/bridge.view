import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'
import Modal from 'react-bootstrap/Modal'

interface PopupProps {
    component?: ComponentProps;
}

const PopupComponent: React.FC<PopupProps> = (props) => {

    let view = 
    <Modal show={true}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default PopupComponent;