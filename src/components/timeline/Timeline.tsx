import React from 'react'
import styled from 'styled-components'
import CellType from '../../model/CellType';
import Cell from './cell/Cell'

interface TimelineProps {
    cellList: CellType[]
    setCellList: (cellList: CellType[]) => void
}

const Timeline = ({ cellList, setCellList }: TimelineProps) => {

    return (
        <Container>
            {
                cellList.map(
                    (cell) => (
                        <Cell cell={cell} cellList={cellList} setCellList={setCellList} />
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