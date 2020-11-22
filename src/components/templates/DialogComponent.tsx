import React from 'react'
import { ComponentProps } from '../atoms/Component'
import Modal from 'react-bootstrap/Modal'
import useTemplate from '../../data/hooks/useTemplate'
import useObjectives from '../../data/hooks/useObjectives'
import { CellBuilder } from '../../data/stores/cell';

interface PopupProps {
    component?: ComponentProps;
}

const PopupComponent: React.FC<PopupProps> = (props) => {
    const { getTemplate } = useTemplate();
    const { getObjectives, callObjectives } = useObjectives();

    console.log("YKD : " + getObjectives);
    callObjectives();
    console.log("YKD : " + getObjectives);

    let view = 
    <Modal show={getTemplate.dialog}>
        <Modal.Body>
            {props.children}
        </Modal.Body>
    </Modal>

    return view;
}

export default PopupComponent;