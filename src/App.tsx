import React from 'react'
import Obj from './layouts/obj/Obj'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import Noti from './components/noti/Noti'
import Modal from './components/modal/Modal';

import NotiType from './model/NotiType'

const App = () => {
    const [noti, setNoti] = React.useState<NotiType>(new NotiType(undefined, "Default"))

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
            <Header/>
            <Obj/>
            <Plan/> 
            <Todo/>

            <Noti noti={noti} setNoti={setNoti} />
            <Modal/>
        </>
    );
}

export default App;
