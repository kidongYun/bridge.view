import React from 'react'
import styled from 'styled-components'
import CellType from '../../../model/CellType';
import Cell from '../cell/Cell'

interface TimelineProps {
    cellList: CellType[]
    remove: (index: number) => void
}

const Timeline = ({ cellList, remove }: TimelineProps) => {

    return (
        <Container>
            {
                cellList.map(
                    (cell) => (
                        <Cell cell={cell} remove={remove} />
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