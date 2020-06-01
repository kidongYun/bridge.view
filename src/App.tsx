import React from 'react';
import Header from './components/header/Header';
import Objective from './components/objective/Objective';
import Plan from './components/plan/Plan';
import Todo from './components/todo/Todo';
import AddButton from './components/addButton/AddButton';
import AddObjectiveModal from './components/addButton/addObjectiveModal/AddObjectiveModal'

export interface _Stage {
    stage: string
}

const App = () => {
    const [stage, setStage] = React.useState("Objective");
    const [addButtonVisible, setAddButtonVisible] = React.useState(false);

    return (
        <>
            <Header setStage={setStage} />
            <Objective stage={stage}/>
            <Plan stage={stage} />
            <Todo stage={stage} />
            <AddButton onClick={() => setAddButtonVisible(true)}/>
            <AddObjectiveModal visible={addButtonVisible} closeClick={() => setAddButtonVisible(false)}/>
        </>
    );
}

export default App;
