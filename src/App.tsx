import React, { useState, useCallback } from 'react'
import MainLayout from './pages/MainLayout';
import SignLayout from './pages/SignLayout';

import useSign from '../src/redux/sign/hook'
import TextComponent from './components/atoms/TextComponent';

const App = () => {
    const { selectSign } = useSign();

    let view = <></>;

    if(selectSign.status !== 200) {
        view = <SignLayout/>
    } else {
        view = <MainLayout/>
    }

    // const [value, setValue] = useState("200");

    // let view = <TextComponent value={value} onChange={() => {
    //     console.log("onChange");
    //     setValue("100");
    // }}/>

    return view;
}

export default App;