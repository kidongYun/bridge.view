import React from 'react'
import styled from 'styled-components'

/* Service */
import * as data from '../../service/data'

/* Component */
import Timeline from '../../components/timeline/Timeline'
import AddButton from './addObjButton/AddObjButton'
import AddObjModal from './addObjButton/addObjModal/AddObjModal'
import RemoveObjModal from './removeObjModal/RemoveObjModal'
import Noti from '../../components/noti/Noti'

/* Model */
import CellType from '../../model/CellType'
import NotiType from '../../model/NotiType'
import ObjCellType from '../../model/ObjCellType'

interface ObjProps {
    stage: string
}

const Obj = ({ stage } : ObjProps) => {
    let view = <></>;

    const [objList, setObjList] = React.useState<CellType[]>(data.postObjList());
    const [noti, setNoti] = React.useState<NotiType>(new NotiType("Default", 2000, false));

    const [addModalVisible, setAddModalVisible] = React.useState(false);
    const [removeModalVisible, setRemoveModalVisible] = React.useState(false);

    const remove = (id: number) => {
        objList.splice(id, 1);

        setObjList([
            ...objList
        ])

        setRemoveModalVisible(false)
        showNoti(new NotiType("It's removed", 2500, true))
    }

    const add = (id: number, title: string, description: string, priority: number, deadline: Date) => {
        setObjList([
            ...objList, new ObjCellType(id, title, description, priority, deadline)
        ])

        setAddModalVisible(false)
        showNoti(new NotiType("It's added", 2500, true));
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

    if(stage !== "Objective") {
        return (view)
    }

    view = 
    <Container>
        <Noti noti={noti} setNoti={setNoti} />
        <Timeline cellList={objList} setRemoveModalVisible={() => setRemoveModalVisible(true)} remove={remove} />
        <AddButton onClick={() => setAddModalVisible(true)}/>
        <AddObjModal visible={addModalVisible} addClick={add} closeClick={() => setAddModalVisible(false)}/>
        <RemoveObjModal visible={removeModalVisible} removeClick={() => remove(1)} closeClick={() => setRemoveModalVisible(false)}/>
    </Container>

    return (view);
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Obj;