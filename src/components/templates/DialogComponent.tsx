import React from 'react'
import { ComponentProps } from '../atoms/Component'
import Modal from 'react-bootstrap/Modal'
import useTemplate from '../../data/hooks/useTemplate'
import useObjectives from '../../data/hooks/useObjectives'

interface DialogProps {
    component?: ComponentProps;
}

const DialogComponent: React.FC<DialogProps> = (props) => {
    const { getTemplate } = useTemplate();
    const { getObjectives, callObjectives } = useObjectives();

    React.useEffect(() => {
        console.log("YKD : " + getObjectives);
        callObjectives();
    }, []);

    console.log("YKD : " + getObjectives);

    let view = 
    <Modal show={getTemplate.dialog}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default DialogComponent;