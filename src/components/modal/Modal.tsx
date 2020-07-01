import React from 'react'
import AddObjModal from './addObjModal/AddObjModal'
import LoginModal from './loginModal/LoginModal';
import RemoveObjModal from './removeObjModal/RemoveObjModal';
import ModalType from '../../model/ModalType';
import NotiType from '../../model/NotiType';

interface ModalProps {
    modal: ModalType
    setModal: (modal: ModalType) => void
    showNoti: (noti: NotiType) => void
}

const Modal = ({modal, setModal, showNoti}: ModalProps) => {
    let view = <></>

    if(modal.type === "Login") {
        view = <LoginModal modal={modal} onClose={() => setModal({...modal, isShow:false})} showNoti={showNoti} />
    }

    if(modal.type === "Add") {
        view = <AddObjModal modal={modal} onClose={() => setModal({...modal, isShow:false})} showNoti={showNoti} />
    }

    if(modal.type === "Remove") {
        view = <RemoveObjModal modal={modal} onClose={() => setModal({...modal, isShow:false})} showNoti={showNoti}/>
    }

    return view
}

export default Modal;