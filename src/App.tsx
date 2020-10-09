import React from 'react'

import Header from './layouts/Header'
import Content from './layouts/Content'

import Noti from './components/noti/Noti'

const App = () => {

    return (
        <>
            <Header/>
            <Content/>
            <Noti/>
        </>
    );
}

export default App;