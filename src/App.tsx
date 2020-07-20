import React from 'react'
import Obj from './layouts/obj/Obj'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import Noti from './components/noti/Noti'
import Modal from './components/modal/Modal';

const App = () => {

    return (
        <>
            <Header/>
            <Obj/>
            <Plan/> 
            <Todo/>

            <Noti/>
            <Modal/>
        </>
    );
}

export default App;