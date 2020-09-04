import React from 'react'
import ObjectiveModal from './ObjectiveModal'
import LoginModal from './LoginModal';
import RemoveModal from './RemoveModal';

import useModal from '../../hooks/useModal';
import useCell from '../../hooks/useCell';
import ObjectiveType from '../../model/ObjectiveType';

const Modal = () => {
    const { type, visible } = useModal();
    const { updatedCell } = useCell();

    let view = <></>

    if(!visible){
        return view;
    }

    if(type === "LOGIN") {
        view = <LoginModal/>
    }

    if(type === "OBJECTIVE") {
        console.log(updatedCell);
        view = <ObjectiveModal obj={ updatedCell as ObjectiveType } />
    }

    if(type === "REMOVE") {
        view = <RemoveModal/>
    }

    return view
}

export default Modal;