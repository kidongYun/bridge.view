import React from 'react';
import Header from './components/header/Header';
import Objective from './components/objective/Objective';
import Plan from './components/plan/Plan';
import Todo from './components/todo/Todo';

export interface _HeaderMenuListener {
    setObjectiveShow: (flag: boolean) => void,
    setPlanShow: (flag: boolean) => void,
    setTodoShow: (flag: boolean) => void
}

const App = () => {
    const [objectiveShow, setObjectiveShow] = React.useState(true);
    const [planShow, setPlanShow] = React.useState(false);
    const [todoShow, setTodoShow] = React.useState(false);

    return (
        <>
            <Header setObjectiveShow={setObjectiveShow} setPlanShow={setPlanShow} setTodoShow={setTodoShow} />
            {/* <Objective show={objectiveShow}/> */}
            <Plan show={planShow} />
            <Todo show={todoShow} />
        </>
    );
}

export default App;
