import React from 'react'
import Obj from './layouts/obj/Obj'
import Plan from './layouts/plan/Plan'
import Todo from './layouts/todo/Todo'
import Header from './layouts/header/Header';

import * as data from './service/data'

const App = () => {
    const [stage, setStage] = React.useState("Plan");

    
    
    return (
        <>
            <Header setStage={setStage} />
            <Obj stage={stage} />
            <Plan stage={stage}/>
            <Todo stage={stage} />
        </>
    );
}

export default App;
