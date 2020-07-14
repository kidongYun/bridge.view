import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import CellType from '../../../model/CellType'
import ObjCellType from '../../../model/ObjCellType'
import DateCellType from '../../../model/DateCellType'
import PlanCellType from '../../../model/PlanCellType';

import useModal from '../../../hooks/useModal';

interface CellProps {
    cell: CellType
    cellList: CellType[]
    setCellList: (cellList: CellType[]) => void
}

const Cell = ({ cell, cellList, setCellList }: CellProps) => {
    let height = "70px"
    let view;

    const objChange = (cell: CellType) => {
        console.log(cell.id);
        console.log("objChange!!");

        const nextCellList = [ ...cellList ];
        nextCellList[cell.id] = {
            ...cellList[cell.id],
            type: "objective_detail"
        };

        setCellList(nextCellList)
    }

    const { onUpdateType, onUpdateVisible } = useModal();

    const onClick = () => {
        onUpdateType("REMOVE_OBJ");
        onUpdateVisible(true);
    }

    if(cell instanceof ObjCellType && cell.type === "objective") {
        height = "70px"

        view =
        <ObjFrame onClick={() => objChange(cell)}>
            <TitleFrame>
                {cell.title}
            </TitleFrame>
            <RemoveFrame>
                <Button variant="outline-danger" onClick={onClick}>Remove</Button>
            </RemoveFrame>
        </ObjFrame>
    }

    if(cell instanceof ObjCellType && cell.type === "objective_detail") {
        height = "200px"

        console.log("objective_detail!!!!!");

        view = 
        <ObjFrame>
            {cell.title}
        </ObjFrame>
    }

    if(cell instanceof PlanCellType) {
        height = "70px"

        view = 
        <PlanFrame>
            {cell.content}
        </PlanFrame>
    }
    
    if(cell instanceof DateCellType) {
        height = "70px"

        view = 
        <DateFrame>
            {cell.date}
        </DateFrame>
    }

    return (
        <Container height={height}>
            {view}
        </Container>
    )
}

interface _Container {
    height: string
}

const Container = styled.div<_Container>`
    width: 100%;
    height: ${props => props.height};
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