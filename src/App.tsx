import React from 'react'
import Obj from './layouts/obj/Obj'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import Noti from './components/noti/Noti'
import Modal from './components/modal/Modal';

import NotiType from './model/NotiType'
import ModalType from './model/ModalType';

const App = () => {
    const [stage, setStage] = React.useState("Plan");

    const [noti, setNoti] = React.useState<NotiType>(new NotiType("Default", 2000, false))
    const [modal, setModal] = React.useState<ModalType>(new ModalType("Default", true, [], () => {}))

    const showNoti = (noti: NotiType) => {
        setNoti(noti);
        setTimeout(setNotiTimer, noti.timer);
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
            <Modal modal={modal} setModal={setModal} />
        </>
    );
}

export default App;
