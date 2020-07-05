import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import CellType from '../../../model/CellType'
import ObjCellType from '../../../model/ObjCellType'
import DateCellType from '../../../model/DateCellType'
import PlanCellType from '../../../model/PlanCellType';
import ModalType from '../../../model/ModalType';

interface CellProps {
    cell: CellType
    setCellList: (cellList: CellType[]) => void
    modal: ModalType
    setModal: (modal: ModalType) => void
}

const Cell = ({ cell, modal, setModal, setCellList }: CellProps) => {
    let view;

    if(cell instanceof ObjCellType) {
        const cellList: CellType[] = [];

        view =
        <ObjFrame>
            <TitleFrame>
                {cell.title}
            </TitleFrame>
            <RemoveFrame>
                <Button variant="outline-danger" onClick={() => setModal({
                    ...modal,
                    type: "Remove",
                    isShow: true,
                    cell: cell,
                    setCellList: setCellList, 
                })}>Remove</Button>
            </RemoveFrame>
        </ObjFrame>
    } 

    if(cell instanceof PlanCellType) {
        console.log("PlanCellType!!!");
        view = <PlanFrame>{cell.content}</PlanFrame>
    }
    
    if(cell instanceof DateCellType) {
        view = <DateFrame>{cell.date}</DateFrame>
    }

    return (
        <Container>
            {view}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 5px;
`;

const ObjFrame = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eeeeee;
    border-radius: 10px;
    padding-right: 10px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const DateFrame = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

const TitleFrame = styled.div`
    width: 400%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const RemoveFrame = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const PlanFrame = styled.div`
    width: 100%;
    height: 100%;
`;

export default Cell;