import React from 'react'
import AddObjModal from './addObjModal/AddObjModal'
import LoginModal from './loginModal/LoginModal';
import RemoveObjModal from './removeObjModal/RemoveObjModal';

import useModal from '../../hooks/useModal';

const Modal = () => {
    const { type, visible } = useModal();

    console.log("type : " + type + ", visible : " + visible);

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

    if(type === "REMOVE_OBJ") {
        view = <RemoveObjModal/>
    }

    return view
}

export default Modal;