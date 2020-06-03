import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';
import * as data from '../../service/data'
import CellType from '../../model/CellType';
import AddButton from '../addButton/AddButton';
import AddObjModal from '../addButton/addObjModal/AddObjModal'

interface ObjProps {
    stage: string
}

const Obj = ({ stage } : ObjProps) => {
    let view;

    const [cellList, setCellList] = React.useState<CellType[]>(data.postObjList());
    const [addModalVisible, setAddModalVisible] = React.useState(false);

    const remove = (index: number) => {
        cellList.splice(index, 1);

        setCellList([
            ...cellList
        ])
    }

    const add = (id: number, title: string, description: string, priority: number, deadline: string) => {
        const index: number = cellList.length;

        setCellList([
            ...cellList, new CellType(index, 'title' + index, 'desc' + index, index, 'dead' + index)
        ])

        setAddModalVisible(false);
    }

    if(stage === "Obj") {
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