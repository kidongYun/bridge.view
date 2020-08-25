import React from 'react'
import AddObjModal from './AddObjModal'
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

    if(type === "ADD_OBJ") {
        view = <AddObjModal/>
    }

    if(type === "REMOVE") {
        view = <RemoveModal/>
    }

    return view
}

export default Modal;