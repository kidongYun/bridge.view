import React from 'react';
import Header from './components/header/Header';
import Objective from './components/objective/Objective';
import Plan from './components/plan/Plan';
import Todo from './components/todo/Todo';
import AddButton from './components/addButton/AddButton';
import AddObjectiveModal from './components/addButton/addObjectiveModal/AddObjectiveModal'

const App = () => {
    const [objectiveVisible, setObjectiveVisible] = React.useState(true);
    const [planVisible, setPlanVisible] = React.useState(false);
    const [todoVisible, setTodoVisible] = React.useState(false);
    const [addButtonVisible, setAddButtonVisible] = React.useState(false);

    return (
        <>
            <Header setObjectiveVisible={setObjectiveVisible} setPlanVisible={setPlanVisible} setTodoVisible={setTodoVisible} />
            <Objective visible={objectiveVisible}/>
            <Plan visible={planVisible} />
            <Todo visible={todoVisible} />
            <AddButton onClick={() => setAddButtonVisible(true)}/>
            <AddObjectiveModal visible={addButtonVisible} closeClick={() => setAddButtonVisible(false)}/>
        </>
    );
}

export default App;
