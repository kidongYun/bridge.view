import React from 'react'
import MainLayout from './pages/MainLayout';
import SignLayout from './pages/SignLayout';

import useSign from '../src/redux/sign/hook'

const App = () => {
    const { selectSign } = useSign();

    let view = <></>;

    if(selectSign.status !== 200) {
        view = <SignLayout/>
    } else {
        view = <MainLayout/>
    }

    return view;
}

export default App;