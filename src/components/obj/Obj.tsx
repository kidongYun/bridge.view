import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';
import * as data from '../../service/data'
import CellType from '../../model/CellType';
import NotiType from '../../model/NotiType';
import AddButton from './addObjButton/AddObjButton';
import AddObjModal from './addObjButton/addObjModal/AddObjModal'
import RemoveObjModal from './removeObjModal/RemoveObjModal';
import Noti from './noti/Noti';

interface ObjProps {
    stage: string
}

const Obj = ({ stage } : ObjProps) => {
    let view;

    const [cellList, setCellList] = React.useState<CellType[]>(data.postObjList());
    const [noti, setNoti] = React.useState<NotiType>(new NotiType("Default", 2000, false));

    const [addModalVisible, setAddModalVisible] = React.useState(false);
    const [removeModalVisible, setRemoveModalVisible] = React.useState(false);
    // const [alertVisible, setAlertVisible] = React.useState(false);

    const remove = (id: number) => {
        cellList.splice(id, 1);

        setCellList([
            ...cellList
        ])

        setRemoveModalVisible(false)

        showNoti(new NotiType("It's removed", 2000, true))
    }

    const add = (id: number, title: string, description: string, priority: number, deadline: string) => {
        setCellList([
            ...cellList, new CellType(id, title, description, priority, deadline)
        ])

        setAddModalVisible(false)

        showNoti(new NotiType("It's added", 2000, true));
    }

    const showNoti = (noti: NotiType) => {
        setNoti(noti);
        setTimeout(setNotiTimer, noti.timer);
    }

    const setNotiTimer = () => {
        setNoti({
            ...noti,
            isShow: false
        });
    }

    if(stage === "Objective") {
        view = 
        <Container>
            <Noti noti={noti} setNoti={setNoti} />
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