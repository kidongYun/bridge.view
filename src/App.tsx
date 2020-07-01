import React from 'react'
import Obj from './layouts/obj/Obj'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import Noti from './components/noti/Noti'
import Modal from './components/modal/Modal';

import NotiType from './model/NotiType'
import ModalType from './model/ModalType';
import CellType from './model/CellType';

const App = () => {
    const [stage, setStage] = React.useState("Plan");

    const [noti, setNoti] = React.useState<NotiType>(new NotiType(undefined, "Default"))
    const [modal, setModal] = React.useState<ModalType>(new ModalType("Default", true, new CellType(0), () => {}))

    const showNoti = (noti: NotiType) => {
        noti.isShow = true;
        setNoti(noti);
        setTimeout(setNotiTimer, 2300);
    }
    
    const setNotiTimer = () => {
        setNoti({
            ...noti,
            isShow: false
        });
    }

    return (
        <>
            <Header modal={modal} setModal={setModal} setStage={setStage} />
            <Obj stage={stage} modal={modal} setModal={setModal} />
            <Plan stage={stage}/>
            <Todo stage={stage} />

            <Noti noti={noti} setNoti={setNoti} />
            <Modal modal={modal} setModal={setModal} showNoti={showNoti} />
        </>
    );
}

export default App;
