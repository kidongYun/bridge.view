import React from 'react'
import Objective from './layouts/objective/Objective'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import Noti from './components/noti/Noti'
import Modal from './controller/Modal'

const App = () => {

    return (
        <>
            <Header/>
            <Objective/>
            <Plan/> 
            <Todo/>

            <Noti/>
            <Modal/>
        </>
    );
}

export default App;