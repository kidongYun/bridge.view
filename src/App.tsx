import React from 'react';
import Header from './components/header/Header';
import Obj from './components/obj/Obj';
import Plan from './components/plan/Plan';
import Todo from './components/todo/Todo';

export interface _Stage {
    stage: string
}

const App = () => {
    const [stage, setStage] = React.useState("Obj");

    return (
        <>
            <Header setStage={setStage} />
            <Obj stage={stage}/>
            <Plan stage={stage} />
            <Todo stage={stage} />
        </>
    );
}

export default App;
