import React from 'react'
import styled from 'styled-components'
import CellType from '../../model/CellType';
import Cell from './cell/Cell'
import ModalType from '../../model/ModalType';

interface TimelineProps {
    cellList: CellType[]
    setCellList: (cellList: CellType[]) => void
    modal: ModalType
    setModal: (modal: ModalType) => void
}

const Timeline = ({ cellList, setCellList, modal, setModal }: TimelineProps) => {

    return (
        <Container>
            {
                cellList.map(
                    (cell) => (
                        <Cell cell={cell} modal={modal} setModal={setModal} setCellList={setCellList} />
                    )
                )
            }
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`

export default Timeline;