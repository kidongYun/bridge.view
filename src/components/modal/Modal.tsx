import React from 'react'
import AddObjModal from './addObjModal/AddObjModal'
import LoginModal from './loginModal/LoginModal';
import RemoveObjModal from './removeObjModal/RemoveObjModal';

interface ModalProps {
    type: string
    isShow: boolean
    parameter: number | undefined
    onClose: () => void
}

const Modal = ({type, isShow, parameter, onClose}: ModalProps) => {
    let view = <></>

    if(type === "Login") {
        view = <LoginModal isShow={isShow} onClose={onClose} />
    }

    if(type === "Add") {
        view = <AddObjModal isShow={isShow} onClose={onClose} />
    }

    if(type === "Remove") {
        view = <RemoveObjModal isShow={isShow} onClose={onClose} cellId={parameter!} />
    }

    return view
}

export default Modal;