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
        view = <LoginModal isShow={modal.isShow} onClose={() => setModal({...modal, isShow:false})} />
    }

    if(modal.type === "Add") {
        view = <AddObjModal isShow={modal.isShow} onClose={() => setModal({...modal, isShow:false})} />
    }

    if(modal.type === "Remove") {
        // view = <RemoveObjModal isShow={modal.isShow} onClose={() => setModal({...modal, isShow:false})} />
    }

    return view
}

export default Modal;