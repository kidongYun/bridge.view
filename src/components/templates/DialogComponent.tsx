import React from 'react'
import { ComponentProps } from '../atoms/Component'
import Modal from 'react-bootstrap/Modal'
import useTemplate from '../../data/hooks/useTemplate'

interface PopupProps {
    component?: ComponentProps;
}

const PopupComponent: React.FC<PopupProps> = (props) => {
    const { isDialog } = useTemplate();

    console.log("YKD : " + isDialog);

    let view = 
    <Modal show={isDialog}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default PopupComponent;