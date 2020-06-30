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
        data.getObj().then((response) => {
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

    if(stage !== "Objective") {
        return (view)
    }

    view = 
    <Container>
        <Timeline cellList={objList} setCellList={setObjList} modal={modal} setModal={setModal} />
        <AddButton onClick={() => 
            setModal({ ...modal,
                type: "Add",
                isShow: true,
                setCellList: setObjList
            })
        }/>
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