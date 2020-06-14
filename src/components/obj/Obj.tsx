import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';
import * as data from '../../service/data'
import CellType from '../../model/CellType';
import AddButton from './addObjButton/AddObjButton';
import AddObjModal from './addObjButton/addObjModal/AddObjModal'
import RemoveObjModal from './removeObjModal/RemoveObjModal';
import AlertObj from './alert/AlertObj';

interface ObjProps {
    stage: string
}

const Obj = ({ stage } : ObjProps) => {
    let view;

    const [cellList, setCellList] = React.useState<CellType[]>(data.postObjList());
    const [addModalVisible, setAddModalVisible] = React.useState(false);
    const [removeModalVisible, setRemoveModalVisible] = React.useState(false);
    const [alertVisible, setAlertVisible] = React.useState(true);

    const remove = (id: number) => {
        cellList.splice(id, 1);

        setCellList([
            ...cellList
        ])

        setRemoveModalVisible(false);
    }

    const add = (id: number, title: string, description: string, priority: number, deadline: string) => {
        setCellList([
            ...cellList, new CellType(id, title, description, priority, deadline)
        ])

        setAddModalVisible(false)
    }

    if(stage === "Objective") {
        view = 
        <Container>
            <AlertObj alertVisible={alertVisible} setAlertVisible={() => setAlertVisible(false)} />
            <Timeline cellList={cellList} setRemoveModalVisible={() => setRemoveModalVisible(true)} remove={remove} />
            <AddButton onClick={() => setAddModalVisible(true)}/>
            <AddObjModal visible={addModalVisible} addClick={add} closeClick={() => setAddModalVisible(false)}/>
            <RemoveObjModal visible={removeModalVisible} removeClick={() => remove(1)} closeClick={() => setRemoveModalVisible(false)}/>
        </Container>
    } else {
        view = <></>
    }

    return (
        view
    );
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Obj;