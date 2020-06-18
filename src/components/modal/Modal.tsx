import React from 'react'
import AddModal from './addModal/AddModal';

interface ModalProps {

}

const Modal = (type: string) => {
    let view = <></>

    if(type === "Add") {
        view = <AddModal/>
    }

    if(type === "Login") {
    }

    return view;
}

export default Modal;