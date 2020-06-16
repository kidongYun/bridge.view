import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import CellType from '../../../model/CellType'
import ObjCellType from '../../../model/ObjCellType'
import DateCellType from '../../../model/DateCellType'
import PlanCellType from '../../../model/PlanCellType';

interface CellProps {
    cell: CellType,
    setRemoveModalVisible: () => void
    remove: (index: number) => void
}

const Cell = ({ cell, setRemoveModalVisible, remove }: CellProps) => {
    let view;

    if(cell instanceof ObjCellType) {
        view =
        <ObjFrame>
            <TitleFrame>
                {cell.title}
            </TitleFrame>
            <RemoveFrame>
                <Button variant="outline-danger" onClick={setRemoveModalVisible}>Remove</Button>
            </RemoveFrame>
        </ObjFrame>
    } 

    if(cell instanceof PlanCellType) {
        view =  <PlanFrame>{cell.plan}</PlanFrame>
    }
    
    if(cell instanceof DateCellType) {
        view =
        <DateFrame>
            {cell.date.toDateString()}
        </DateFrame>
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