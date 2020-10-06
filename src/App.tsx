import React from 'react'

import Header from './layouts/Header'
import Content from './layouts/Content'

import Noti from './components/noti/Noti'
import Modal from './controller/ModalController'

const App = () => {

    return (
        <>
            <Header/>
            <Content/>

            <Noti/>
            <Modal/>
        </>
    );
}

export default App;