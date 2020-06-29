import React from 'react'
import AddObjModal from './addObjModal/AddObjModal'
import LoginModal from './loginModal/LoginModal';
import RemoveObjModal from './removeObjModal/RemoveObjModal';
import ModalType from '../../model/ModalType';

interface ModalProps {
    modal: ModalType
    setModal: (modal: ModalType) => void
}

const Modal = ({modal, setModal}: ModalProps) => {
    let view = <></>

    if(modal.type === "Login") {
        view = <LoginModal modal={modal} onClose={() => setModal({...modal, isShow:false})} />
    }

    if(modal.type === "Add") {
        view = <AddObjModal modal={modal} onClose={() => setModal({...modal, isShow:false})} />
    }

    if(modal.type === "Remove") {
        view = <RemoveObjModal modal={modal} onClose={() => setModal({...modal, isShow:false})} />
    }

    return view
}

export default Modal;