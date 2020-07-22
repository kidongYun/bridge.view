import React from 'react'
import AddModal from './AddObjModal'
import LoginModal from './LoginModal';
import RemoveModal from './RemoveModal';

import useModal from '../../hooks/useModal';

const Modal = () => {

    const { type, visible } = useModal();

    let view = <></>

    if(!visible){
        return view;
    }

    if(type === "LOGIN") {
        view = <LoginModal/>
    }

    if(type === "ADD") {
        view = <AddModal/>
    }

    if(type === "REMOVE") {
        view = <RemoveModal/>
    }

    return view
}

export default Modal;