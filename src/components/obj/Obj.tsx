import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';
import * as data from '../../service/data'
import CellType from '../../model/CellType';
import AddButton from './addObjButton/AddObjButton';
import AddObjModal from './addObjButton/addObjModal/AddObjModal'

interface ObjProps {
    stage: string
}

const Obj = ({ stage } : ObjProps) => {
    let view;

    const [cellList, setCellList] = React.useState<CellType[]>(data.postObjList());
    const [addModalVisible, setAddModalVisible] = React.useState(false);

    const remove = (id: number) => {
        cellList.splice(id, 1);

        setCellList([
            ...cellList
        ])
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
            <Timeline cellList={cellList} remove={remove} />
            <AddButton onClick={() => setAddModalVisible(true)}/>
            <AddObjModal visible={addModalVisible} addClick={add} closeClick={() => setAddModalVisible(false)}/>
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