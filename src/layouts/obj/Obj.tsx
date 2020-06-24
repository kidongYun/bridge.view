import React from 'react'
import styled from 'styled-components'
import { plainToClass } from 'class-transformer'

/* Service */
import * as data from '../../service/data'

/* Component */
import Timeline from '../../components/timeline/Timeline'
import AddButton from './addObjButton/AddObjButton'

/* Model */
import CellType from '../../model/CellType'
import ObjCellType from '../../model/ObjCellType'
import ModalType from '../../model/ModalType';


interface ObjProps {
    stage: string
    modal: ModalType
    setModal: (modal: ModalType) => void
}

const Obj = ({ stage, modal, setModal } : ObjProps) => {
    let view = <></>;

    const [objList, setObjList] = React.useState<CellType[]>([])

    React.useEffect(() => {
        data.postObj().then((response) => {
            setObjList(plainToClass(ObjCellType, response.data))
        })
    }, [])

    // const remove = (id: number) => {
    //     objList.splice(id, 1);

    //     setObjList([
    //         ...objList
    //     ])

    //     setRemoveModalVisible(false)
    //     showNoti(new NotiType("It's removed", 2500, true))
    // }

    const add = (id: number, title: string, description: string, priority: number, deadline: Date) => {
        // setObjList([
        //     // ...objList, new ObjCellType(id, title, description, priority, deadline)
        // ])

        // setAddModalVisible(false)
        // showNoti(new NotiType("It's added", 2500, true));
    }

    if(stage !== "Objective") {
        return (view)
    }

    view = 
    <Container>
        <Timeline cellList={objList} />
        <AddButton onClick={() => setModal({...modal, type: "Add", isShow: true})}/>
        {/* <AddObjModal visible={addModalVisible} addClick={add} closeClick={() => setAddModalVisible(false)}/>
        <RemoveObjModal visible={removeModalVisible} closeClick={() => setRemoveModalVisible(false)}/> */}
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