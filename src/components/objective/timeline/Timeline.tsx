import React from 'react'
import styled from 'styled-components'
import Cell from '../cell/Cell';

export interface _CellList {
    cellList: _Cell[];
}

export interface _Cell {
    id: number,
    title: string,
    description: string,
    priority: number,
    deadline: string
}

const Timeline = ({cellList}: _CellList) => {

    return (
        <Container>
            {
                cellList.map(
                    (cell) => (
                        <Cell id={cell.id} title={cell.title} description={cell.description} priority={cell.priority} deadline={cell.deadline} />
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